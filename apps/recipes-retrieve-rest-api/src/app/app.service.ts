import { BadRequestException, Injectable } from "@nestjs/common";
import { GetRecipesParamsType, GetRecipesReturnType, MediaRegister, RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import {
  IngredientRegister, StepRegister, TechniqueRegister, ToolRegister
} from "@recipes-per-ingredient/contracts-types";
const PERSISTENCE_URI = process.env.PERSISTENCE_URI || "localhost:3000";

@Injectable()
export class AppService {
  async getById(id: number): Promise<RecipeRegisterContract> {
    const payload: GetRecipesParamsType = {
      filter: {
        cod_recipe: {
          equals: id
        }
      }
    };
    const response = await fetch(PERSISTENCE_URI, {
      body: JSON.stringify(payload),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    const responseJson = await response.json();
    const recipes = parseRecipes(responseJson);
    if (recipes.length > 0) {
      return recipes[0];
    }
    throw new BadRequestException();
  }
  async getWithIngredients(ingredients: string[]) {
    const payload: GetRecipesParamsType = {
      filter: {
        NOT: {
          ingredients_recipe: {
            some: {
              ingredient: {
                name: {
                  notIn: ingredients,
                  mode: "insensitive"
                }
              }
            }
          }
        }
      }
    };
    const response = await fetch(PERSISTENCE_URI, {
      body: JSON.stringify(payload),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    const responseJson = await response.json();
    const recipes = parseRecipes(responseJson);
    return recipes;
  }
  async getTop(qtd: number) {
    const payload: GetRecipesParamsType = { take: qtd };
    const response = await fetch(PERSISTENCE_URI, {
      body: JSON.stringify(payload),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    const responseJson: GetRecipesReturnType = await response.json();
    const recipes = parseRecipes(responseJson);
    return recipes;
  }
}

function parseRecipes(recipes_data: GetRecipesReturnType): RecipeRegisterContract[] {
  const recipes: RecipeRegisterContract[] = [];

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
    const recipe: RecipeRegisterContract = {
      cod: recipe_data.cod_recipe,
      name: recipe_data.name,
      serves_adults: recipe_data.serves_adults,
      medias: recipe_data.medias.map<MediaRegister>((media_register) => {
        return {
          cod: media_register.cod_media,
          source: media_register.media_uri
        };
      }),
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
      cooking_time: recipe_data.cooking_time ? recipe_data.cooking_time : undefined,
      preparation_time: recipe_data.preparation_time,
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

