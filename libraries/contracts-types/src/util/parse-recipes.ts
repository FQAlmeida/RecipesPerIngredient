import { DatabaseRecipe } from "../lib/database-types";
import { IngredientRegister, MediaRegister, RecipeRegisterContract, StepRegister, TechniqueRegister, ToolRegister } from "../lib/recipes-types";

export type StepType = DatabaseRecipe["steps"][number];
export type MediaType = DatabaseRecipe["medias"][number];
export type IngredientType = DatabaseRecipe["ingredients_recipe"][number];
export type ToolType = DatabaseRecipe["tools_recipe"][number];
export type TechniqueType = StepType["technique"];

const getTechnique = (technique: TechniqueType): TechniqueRegister | undefined => {
    if (!technique) {
        return;
    }
    return {
        cod: technique.cod_technique,
        name: technique.name,
        description: technique.description
    };
};

export function parseRecipe(recipe_data: DatabaseRecipe): RecipeRegisterContract {
    return {
        cod: recipe_data.cod_recipe,
        name: recipe_data.name,
        serves_adults: recipe_data.serves_adults,
        medias: recipe_data.medias.map<MediaRegister>((media_register: MediaType) => {
            return {
                cod: media_register.cod_media,
                source: media_register.media_uri
            };
        }),
        difficult_level: {
            cod: recipe_data.difficulty_level.cod_difficulty_level,
            difficult: recipe_data.difficulty_level.level
        },
        tools: recipe_data.tools_recipe.map<ToolRegister>((tool_data: ToolType) => {
            return {
                cod: tool_data.tool.cod_tool,
                is_required: tool_data.is_required,
                name: tool_data.tool.name,
                details: tool_data.tool.details
            };
        }),
        ingredients: recipe_data.ingredients_recipe.map<IngredientRegister>((ingredient_data: IngredientType) => {
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
        }),
        cooking_time: recipe_data.cooking_time ? recipe_data.cooking_time : undefined,
        preparation_time: recipe_data.preparation_time,
        steps: recipe_data.steps.map<StepRegister>((data: StepType) => {
            return {
                cod: data.cod_step,
                depends_on: data.cod_depends_on_step || undefined,
                description: data.description,
                technique: getTechnique(data.technique),

            };
        })
    };
}

export function parseRecipes(recipes_data: DatabaseRecipe[]): RecipeRegisterContract[] {
    return recipes_data.map(parseRecipe)
}