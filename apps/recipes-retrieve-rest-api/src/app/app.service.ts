import { Injectable } from "@nestjs/common";
import { GetRecipesParamsType, GetRecipesReturnType } from "@recipes-per-ingredient/database-connection";
import {
  convertToDuration
} from "@recipes-per-ingredient/recipes-models";
import {
  IngredientRegister, RecipeRegister, StepRegister, TechniqueRegister, ToolRegister
} from "@recipes-per-ingredient/contracts-types";

@Injectable()
export class AppService {
  async getWithIngredients(ingredients: string[]) {
    const payload: GetRecipesParamsType = {
      filter: {
        ingredients_recipe: {
          every: {
            ingredient: {
              name: {
                in: ingredients
              }
            }
          }
        }
      }
    };
    const response = await fetch("persistence_uri", { // TODO: Setup docker to resolve uri
      body: JSON.stringify(payload),
      method: "POST"
    });
    const responseJson = await response.json();
    const recipes = parseRecipes(responseJson);
    return recipes;
  }
  async getTop(qtd: number) {
    const payload: GetRecipesParamsType = { take: qtd };
    const response = await fetch("persistence_uri", { // TODO: Setup docker to resolve uri
      body: JSON.stringify(payload),
      method: "POST"
    });
    const responseJson: GetRecipesReturnType = await response.json();
    const recipes = parseRecipes(responseJson);
    return recipes;
  }
}

function parseRecipes(recipes_data: GetRecipesReturnType): RecipeRegister[] {
  const recipes: RecipeRegister[] = [];

  type step_type = typeof recipes_data[number]["steps"];
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

  for (const recipe_data of recipes_data) {
    const recipe: RecipeRegister = {
      cod: recipe_data.cod_recipe,
      name: recipe_data.name,
      serves_adults: 0, // FIX: Why recipes_data dont have serves_adult
      difficult_level: {
        cod: recipe_data.difficulty_level.cod_difficulty_level,
        difficult: recipe_data.difficulty_level.level
      },
      tools: recipe_data.tools_recipe.map<ToolRegister>(tool_data => {
        return {
          cod: tool_data.tool.cod_tool,
          is_required: tool_data.is_required,
          name: tool_data.tool.name,
          details: tool_data.tool.details
        };
      }),
      ingredients: recipe_data.ingredients_recipe.map<IngredientRegister>(ingredient_data => {
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
      cooking_time: recipe_data.cooking_time ? convertToDuration(recipe_data.cooking_time) : undefined,
      preparation_time: convertToDuration(recipe_data.preparation_time),
      steps: recipe_data.steps.map<StepRegister>((data) => {
        return {
          cod: data.cod_step,
          depends_on: data.cod_depends_on_step || undefined,
          description: data.description,
          technique: getTechnique(data.technique),

        };
      })
    };
    recipes.push(recipe);
  }
  return recipes;
}

