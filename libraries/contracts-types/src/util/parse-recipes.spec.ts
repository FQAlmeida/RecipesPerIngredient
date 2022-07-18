import { DatabaseRecipe } from "../lib/database-types"
import { IngredientRegister, MediaRegister, StepRegister, ToolRegister } from "../lib/recipes-types"
import { IngredientType, MediaType, parseRecipe, StepType, ToolType } from "./parse-recipes"

function matchRecipeSteps(parsed_steps: StepRegister[], db_steps: StepType[]){
    const sorted_db_steps = db_steps.sort((a, b) => a.cod_step - b.cod_step)
    const sorted_parsed_steps = parsed_steps.sort((a, b) => a.cod - b.cod)
    expect(sorted_db_steps).toHaveLength(sorted_parsed_steps.length)
    for(let index = 0; index < sorted_parsed_steps.length; index++){
        expect(sorted_parsed_steps[index].cod).toBe(sorted_db_steps[index].cod_step)
        expect(sorted_parsed_steps[index].technique?.name).toBe(sorted_db_steps[index].technique?.name)
        expect(sorted_parsed_steps[index].depends_on).toBe(sorted_db_steps[index].depends_on?.cod_step)
        expect(sorted_parsed_steps[index].description).toBe(sorted_db_steps[index].description)
    }
}

function matchRecipeTools (parsed_tools:ToolRegister[], db_tools: ToolType[]){
    const sorted_db_tools = db_tools.sort((a, b) => a.cod_tool - b.cod_tool)
    const sorted_parsed_tools = parsed_tools.sort((a, b) => a.cod - b.cod)
    expect(sorted_db_tools).toHaveLength(sorted_parsed_tools.length)
    for(let index = 0; index < sorted_parsed_tools.length; index++){
        expect(sorted_parsed_tools[index].cod).toBe(sorted_db_tools[index].cod_tool)
        expect(sorted_parsed_tools[index].details).toBe(sorted_db_tools[index].tool.details)
        expect(sorted_parsed_tools[index].name).toBe(sorted_db_tools[index].tool.name)
        expect(sorted_parsed_tools[index].is_required).toBe(sorted_db_tools[index].is_required)
    }
}

function matchRecipeIngredients (parsed_ingredients:IngredientRegister[], db_ingredients: IngredientType[]){
    const sorted_db_ingredients = db_ingredients.sort((a, b) => a.cod_ingredient - b.cod_ingredient)
    const sorted_parsed_ingredients = parsed_ingredients.sort((a, b) => a.cod - b.cod)
    expect(sorted_db_ingredients).toHaveLength(sorted_parsed_ingredients.length)
    for(let index = 0; index < sorted_parsed_ingredients.length; index++){
        expect(sorted_parsed_ingredients[index].cod).toBe(sorted_db_ingredients[index].cod_ingredient)
        expect(sorted_parsed_ingredients[index].measure_unit.cod).toBe(sorted_db_ingredients[index].measurement_unit.cod_measurement_unit)
        expect(sorted_parsed_ingredients[index].measure_unit.name).toBe(sorted_db_ingredients[index].measurement_unit.name)
        expect(sorted_parsed_ingredients[index].is_required).toBe(sorted_db_ingredients[index].is_required)
        expect(sorted_parsed_ingredients[index].name).toBe(sorted_db_ingredients[index].ingredient.name)
        expect(sorted_parsed_ingredients[index].quantity).toBe(sorted_db_ingredients[index].quatity)

    }
}

function matchRecipeMedias(parsed_medias:MediaRegister[], db_medias: MediaType[]) {
    const sorted_db_medias = db_medias.sort((a, b) => a.cod_media - b.cod_media)
    const sorted_parsed_medias= parsed_medias.sort((a, b) => a.cod - b.cod)
    expect(sorted_db_medias).toHaveLength(sorted_parsed_medias.length)
    for(let index = 0; index < sorted_parsed_medias.length; index++){
        expect(sorted_parsed_medias[index].cod).toBe(sorted_db_medias[index].cod_media)
        expect(sorted_parsed_medias[index].source).toBe(sorted_db_medias[index].media_uri)
    }

}


const getDbRecipe = () => {
    return {
        cod_recipe: 1,
        medias: [
            {
                cod_media: 1,
                cod_recipe: 1,
                media_uri: "http://some_images.com/image.jpg"
            }
        ],
        cooking_time: "PT5M",
        preparation_time: "PT10M",
        name: "A recipe",
        steps: [
            {
                cod_recipe: 1,
                cod_step: 1,
                cod_depends_on_step: null,
                cod_technique: null,
                description: "First Step",
                technique: null,
                depends_on: null,
            },
            {
                cod_recipe: 1,
                cod_step: 2,
                cod_depends_on_step: 1,
                cod_technique: null,
                description: "Second Step",
                technique: null,
                depends_on: {
                    cod_step: 1
                },
            },
        ],
        serves_adults: 2,
        tools_recipe: [
            {
                cod_recipe: 1,
                cod_tools_recipe: 1,
                cod_tool: 1,
                is_required: true,
                tool: {
                    cod_tool: 1,
                    details: "A pan",
                    name: "Pan"
                }
            },
            {
                cod_recipe: 1,
                cod_tools_recipe: 2,
                cod_tool: 2,
                is_required: false,
                tool: {
                    cod_tool: 2,
                    details: "A spoon",
                    name: "Spoon"
                }
            }
        ],
        ingredients_recipe: [
            {
                cod_ingredient: 1,
                cod_ingredient_recipe: 1,
                cod_measurement_unit: 1,
                cod_recipe: 1,
                ingredient: {
                    cod_ingredient: 1,
                    name: "Flour"
                },
                is_required: true,
                measurement_unit: {
                    cod_measurement_unit: 1,
                    name: "MG"
                },
                quatity: 350
            },

            {
                cod_ingredient: 2,
                cod_ingredient_recipe: 2,
                cod_measurement_unit: 1,
                cod_recipe: 1,
                ingredient: {
                    cod_ingredient: 2,
                    name: "Water"
                },
                is_required: true,
                measurement_unit: {
                    cod_measurement_unit: 1,
                    name: "MG"
                },
                quatity: 250
            }
        ],
        cod_difficulty_level: 1,
        difficulty_level: {
            cod_difficulty_level: 1,
            level: "Easy"
        }
    }
}

describe("Converting from DB model to System", () => {
    test("Given a valid DB Recipe, when parsed, then we have a System model", () => {
        const db_recipe: DatabaseRecipe = getDbRecipe();
        const parsed_recipe = parseRecipe(db_recipe);
        expect(parsed_recipe.name).toBe(db_recipe.name);

        expect(parsed_recipe.cod).toBe(db_recipe.cod_recipe);
        expect(parsed_recipe.cooking_time).toBe(db_recipe.cooking_time);
        expect(parsed_recipe.difficult_level.cod).toBe(db_recipe.difficulty_level.cod_difficulty_level);
        expect(parsed_recipe.preparation_time).toBe(db_recipe.preparation_time);
        expect(parsed_recipe.serves_adults).toBe(db_recipe.serves_adults);
        matchRecipeSteps(parsed_recipe.steps, db_recipe.steps);
        matchRecipeIngredients(parsed_recipe.ingredients, db_recipe.ingredients_recipe);
        matchRecipeTools(parsed_recipe.tools, db_recipe.tools_recipe);
        matchRecipeMedias(parsed_recipe.medias, db_recipe.medias)

    })
})

