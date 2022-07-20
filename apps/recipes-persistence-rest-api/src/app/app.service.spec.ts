import { AppService } from "./app.service"
import {
    getRecipes as getRecipesFromDb, GetRecipesParamsType, GetRecipesReturnType,
} from '@recipes-per-ingredient/database-connection';
jest.mock('@recipes-per-ingredient/database-connection', () => {
    return {
        getRecipesFromDb: jest.fn(),
        getRecipes: jest.fn()
    }
});
const mockedDbConnection = getRecipesFromDb as jest.MockedFunction<typeof getRecipesFromDb>;

describe("Recipes Retrieve", () => {
    let service: AppService
    beforeEach(() => {
        service = new AppService();
    })
    test(`Given a recipe with cod 1 is registered on the database, 
            when a payload equals to {filter: {cod: 1}} is sent to get recipes,
            then the recipe in the database should be returned`, async () => {
        const recipes_on_db: GetRecipesReturnType = [{
            cod_recipe: 1,
            ingredients_recipe: [],
            difficulty_level: {
                cod_difficulty_level: 1,
                level: "Easy"
            },
            cod_difficulty_level: 1,
            tools_recipe: [],
            medias: [],
            name: "A recipe",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: []
        }]
        const payload: GetRecipesParamsType = {
            filter: {
                cod_recipe: 1
            }
        }
        mockedDbConnection.mockReturnValue(Promise.resolve(recipes_on_db))
        const response = await service.getRecipes(payload)
        expect(response).toHaveLength(1)
        expect(response[0].cod).toBe(recipes_on_db[0].cod_recipe)

    })
    test(`Given no recipe is registered on the database,
        when a payload equals to {filter: {cod: 1}} is sent to get recipes,
        then a empty list should be returned`, async () => {

        const recipes_on_db: GetRecipesReturnType = []
        const payload: GetRecipesParamsType = {
            filter: {
                cod_recipe: 1
            }
        }

        mockedDbConnection.mockReturnValue(Promise.resolve(recipes_on_db))
        const response = await service.getRecipes(payload)
        expect(response).toEqual([])

    })
})
