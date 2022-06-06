import { RecipeRegister } from "recipe-models/src/models/Recipe";
import { getRecipes as getRecipesFromDB } from "database-connection/src/interface";
import { StepRegister } from "recipe-models/src/models/Step";
import { convertToDuration } from "recipe-models/src/utils/convert_to_interval";
import { ToolRegister } from "recipe-models/src/models/Tool";
import { IngredientRegister } from "recipe-models/src/models/Ingredient";
import { TechniqueRegister } from "recipe-models/src/models/Technique";

export async function getRecipes(args: Parameters<typeof getRecipesFromDB>) {
    const recipes_data = await getRecipesFromDB(...args);
    if (recipes_data.length != 1) {
        return;
    }
    const recipe_data = recipes_data[0];

    type step_type = typeof recipe_data.steps;
    type technique_type = step_type[number]["technique"];

    const getTechnique = (technique: technique_type): TechniqueRegister | undefined => {
        if (!technique) {
            return;
        }
        return {
            cod: technique.cod_technique,
            name: technique.name,
            description: technique.description
        };
    };
    const recipe: RecipeRegister = {
        cod: recipe_data.cod_recipe,
        name: recipe_data.name,
        serves_adults: 0, // FIX: Why recipes_data dont have serves_adult
        difficult_level: {
            cod: recipe_data.difficulty_level.cod_difficulty_level,
            difficult: recipe_data.difficulty_level.level
        },
        steps: recipe_data.steps.map<StepRegister>((data) => {
            return {
                cod: data.cod_step,
                depends_on: data.cod_depends_on_step || undefined,
                description: data.description,
                cooking_time: convertToDuration(data.cooking_time),
                preparation_time: convertToDuration(data.preparation_time),
                technique: getTechnique(data.technique),
                tools: data.ToolsStep.map<ToolRegister>(tool_data => {
                    return {
                        cod: tool_data.tool.cod_tool,
                        is_required: tool_data.is_required,
                        name: tool_data.tool.name,
                        details: tool_data.tool.details
                    };
                }),
                ingredients: data.IngredientsStep.map<IngredientRegister>(ingredient_data => {
                    return {
                        cod: ingredient_data.ingredient.cod_ingredient,
                        is_required: ingredient_data.is_required,
                        name: ingredient_data.ingredient.name,
                        measure_unit: {
                            cod: ingredient_data.measurement_unit.cod_measurement_unit,
                            name: ingredient_data.measurement_unit.name
                        },
                        quantity: ingredient_data.quatity
                    };
                })
            };
        })
    };
    return recipe;
}