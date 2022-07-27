import { Injectable } from "@nestjs/common";
import {
  getRecipes as getRecipesFromDb,
} from '@recipes-per-ingredient/database-connection';
import {
  GetRecipesParamsType, parseRecipes, RecipeRegisterContract
} from "@recipes-per-ingredient/contracts-types";

@Injectable()
export class AppService {
  async getRecipes(request: GetRecipesParamsType): Promise<RecipeRegisterContract[]> {
    const data = await getRecipesFromDb(request);
    const recipes = parseRecipes(data);
    
    return recipes;
  }
}
