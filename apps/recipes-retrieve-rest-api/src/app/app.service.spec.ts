import { AppService } from "./app.service"
import axios from 'axios';
import { RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import { NotFoundException } from "@nestjs/common";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Retrieve Recipes by ID", () => {
    let service: AppService
    beforeEach(() => {
        service = new AppService();
    })
    test(`Given a recipe with cod 1 is registered on the database, 
            when the service to retrieve a recipe by id is called with id 1,
            then the recipe in the database should be returned`, async () => {
        const recipe_on_db: RecipeRegisterContract = {
            cod: 1,
            ingredients: [],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        }
        mockedAxios.post.mockResolvedValue({ data: [recipe_on_db] })
        const response = await service.getById(recipe_on_db.cod) as RecipeRegisterContract
        expect(response).not.toHaveProperty("statusCode")

        expect(response.cod).toBe(recipe_on_db.cod)
    })
    test(`Given no recipe is registered on the database,
        when the service to retrieve a recipe by id is called with id 1
        then a error object informing that no recipe was found should be retrieved`, async () => {
        const recipes_on_db: RecipeRegisterContract[] = []
        const query_param = 1
        mockedAxios.post.mockResolvedValue({ data: recipes_on_db })
        await expect(service.getById(query_param)).rejects.toThrow(NotFoundException)
    })
})

describe("Retrieve Recipes by ingredients", () => {
    let service: AppService
    beforeEach(() => {
        service = new AppService();
    })
    test(`Given a recipe, with cod 1 and [flour, water] as ingredients, is registered on the database, 
            when the service to retrieve a recipe by ingredients is called with [flour, water, lettuce],
            then the recipe in the database should be returned`, async () => {
        const recipe_on_db: RecipeRegisterContract = {
            cod: 1,
            ingredients: [
                {
                    cod: 1,
                    is_required: true,
                    measure_unit: {
                        cod: 1,
                        name: "Gr"
                    },
                    name: "flour",
                    quantity: 400
                },
                {
                    cod: 1,
                    is_required: true,
                    measure_unit: {
                        cod: 1,
                        name: "Gr"
                    },
                    name: "water",
                    quantity: 400
                }
            ],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        }
        mockedAxios.post.mockResolvedValue({ data: [recipe_on_db] })
        const response = await service.getWithIngredients(["water", "flour", "lettuce"]) as RecipeRegisterContract[]
        expect(response).not.toHaveProperty("statusCode")
        expect(response).toHaveLength(1)
        expect(response[0].cod).toBe(recipe_on_db.cod)
    })
    test(`Given no recipe is registered on the database,
        when the service to retrieve a recipe by ingredients is called with [flour, water, lettuce],
        then a empty list should be returned`, async () => {
        const recipes_on_db: RecipeRegisterContract[] = []
        const query_param = ["flour", "water", "lettuce"]
        mockedAxios.post.mockResolvedValue({ data: recipes_on_db })
        await expect(service.getWithIngredients(query_param)).resolves.toEqual([])
    })
})

describe("Retrieve Top Recipes", () => {
    let service: AppService
    beforeEach(() => {
        service = new AppService();
    })
    test(`Given 3 recipes are registered on the database, 
            when the service to retrieve top recipes is called with top 2,
            then 2 of the recipes in the database should be returned`, async () => {
        const recipe_on_db: RecipeRegisterContract[] = [{
            cod: 1,
            ingredients: [],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe 1",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        }, {
            cod: 2,
            ingredients: [],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe 2",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        }, {
            cod: 3,
            ingredients: [],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe 3",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        },
        ]
        const query_params = 2
        mockedAxios.post.mockResolvedValue({ data: recipe_on_db.slice(0, query_params) })
        const response = await service.getTop(query_params) as RecipeRegisterContract[]
        expect(response).not.toHaveProperty("statusCode")

        expect(response).toHaveLength(query_params)
        response.map(recipe => {
            expect(recipe_on_db.map(r => r.cod)).toContain(recipe.cod)
        })
    })
    test(`Given 3 recipes are registered on the database, 
    when the service to retrieve top recipes is called with top 4,
    then 3 of the recipes in the database should be returned`, async () => {
        const recipe_on_db: RecipeRegisterContract[] = [{
            cod: 1,
            ingredients: [],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe 1",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        }, {
            cod: 2,
            ingredients: [],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe 2",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        }, {
            cod: 3,
            ingredients: [],
            difficult_level: {
                cod: 1,
                difficult: "Easy"
            },
            medias: [],
            name: "A recipe 3",
            preparation_time: "PT5M",
            cooking_time: "PT5M",
            serves_adults: 2,
            steps: [],
            tools: []
        },
        ]
        const query_params = 4
        const expected_lenght = 3
        mockedAxios.post.mockResolvedValue({ data: recipe_on_db })
        const response = await service.getTop(query_params) as RecipeRegisterContract[]
        expect(response).not.toHaveProperty("statusCode")

        expect(response).toHaveLength(expected_lenght)
        response.map(recipe => {
            expect(recipe_on_db.map(r => r.cod)).toContain(recipe.cod)
        })
    })
    test(`Given no recipes are registered on the database, 
    when the service to retrieve top recipes is called with top 10,
    then a empty list should be returned`, async () => {
        const recipes_on_db: RecipeRegisterContract[] = []
        const query_param = 10
        mockedAxios.post.mockResolvedValue({ data: recipes_on_db })
        const response = await service.getTop(query_param) as RecipeRegisterContract[]
        expect(response).toHaveLength(0)
        expect(response).toEqual([])
    })
})
