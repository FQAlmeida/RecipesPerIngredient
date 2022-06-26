import { Injectable } from '@nestjs/common';
import {
  GetRecipesParamsType,
  GetRecipesReturnType,
  getRecipes as getRecipesFromDb,
} from 'database-connection/src/interface';

@Injectable()
export class AppService {
  async getRecipes(request: GetRecipesParamsType): GetRecipesReturnType {
    return await getRecipesFromDb(request);
  }
}
