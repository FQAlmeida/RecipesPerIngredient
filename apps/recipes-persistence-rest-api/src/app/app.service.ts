import { Injectable } from "@nestjs/common";
import {
  getRecipes as getRecipesFromDb,
} from '@recipes-per-ingredient/database-connection';
import {
  GetRecipesParamsType, GetRecipesReturnType
} from "@recipes-per-ingredient/contracts-types";

@Injectable()
export class AppService {
  async getRecipes(request: GetRecipesParamsType): Promise<GetRecipesReturnType> {
    return await getRecipesFromDb(request);
  }
}
