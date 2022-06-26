import { Injectable } from "@nestjs/common";

import { GetRecipesParamsType } from "database-connection/src/interface";

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
    return await fetch("persistence_uri", {
      body: JSON.stringify(payload)
    });
  }
  async getTop(qtd: number) {
    const payload: GetRecipesParamsType = { take: qtd };
    const response = await fetch("persistence_uri", {
      body: JSON.stringify(payload)
    });
    const recipes = parseRecipes(response.body);
    return recipes;
  }
}
function parseRecipes(body: ReadableStream<Uint8Array>) {
  throw new Error("Function not implemented.");
}

