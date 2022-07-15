import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ErrorMessage, GetRecipesParamsType, GetRecipesReturnType, isInstanceOfError, RecipeRegisterContract, parseRecipes } from "@recipes-per-ingredient/contracts-types";
import axios from "axios";

const PERSISTENCE_URI = process.env.PERSISTENCE_URI || "localhost:3000";

type PersistenceResponse = GetRecipesReturnType | ErrorMessage
type RetrieveResponse = RecipeRegisterContract | ErrorMessage

@Injectable()
export class AppService {
  async getById(id: number): Promise<RetrieveResponse> {
    const payload: GetRecipesParamsType = {
      filter: {
        cod_recipe: {
          equals: id
        }
      }
    };
    const response = await axios.post<PersistenceResponse>(PERSISTENCE_URI, payload, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    const data = response.data;
    if (isInstanceOfError(data)) {
      if (data.statusCode.toString().match(/5../g)) {
        throw new InternalServerErrorException(data.message);
      }
      return data;
    }
    const recipes = parseRecipes(data);
    if (recipes.length > 0) {
      return recipes[0];
    }
    throw new BadRequestException(`No recipe with code: ${id}`);
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

    const response = await axios.post<PersistenceResponse>(PERSISTENCE_URI, payload, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });

    const data = response.data;

    if (isInstanceOfError(data)) {
      if (data.statusCode.toString().match(/5../g)) {
        throw new InternalServerErrorException(data.message);
      }
      return data;
    }
    const recipes = parseRecipes(data);
    return recipes;
  }

  async getTop(qtd: number) {
    const payload: GetRecipesParamsType = { take: qtd };
    const response = await axios.post<PersistenceResponse>(PERSISTENCE_URI, payload, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    const data = response.data;

    if (isInstanceOfError(data)) {
      if (data.statusCode.toString().match(/5../g)) {
        throw new InternalServerErrorException(data.message);
      }
      return data;
    }
    const recipes = parseRecipes(data);
    return recipes;
  }
}



