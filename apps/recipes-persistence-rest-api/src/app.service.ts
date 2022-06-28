import { Injectable } from '@nestjs/common';
import {
  getRecipes as getRecipesFromDb,
} from 'database-connection/src/interface';
import {
  GetRecipesParamsType, GetRecipesReturnType
} from "contract-types";

@Injectable()
export class AppService {
  async getRecipes(request: GetRecipesParamsType): Promise<GetRecipesReturnType> {
    return await getRecipesFromDb(request);
  }
}
