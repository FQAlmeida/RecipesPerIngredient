import { Controller, HttpCode, Post, Req } from '@nestjs/common';
import { GetRecipesParamsType, GetRecipesReturnType } from 'database-connection/src/interface';
import { Request } from 'express';
import { AppService } from './app.service';

// type FisrtParam<
//   T extends (...args: any) => any
// > = Parameters<T> extends [infer Head, ...infer _] ?
//   Head :
//   never;
type RequestBody<T> = Request<unknown, unknown, T>;
export type GetRecipesRequestBody = RequestBody<string>;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @HttpCode(200)
  getRecipes(@Req() request: GetRecipesRequestBody)
    : GetRecipesReturnType {
    const body: GetRecipesParamsType = JSON.parse(request.body);
    return this.appService.getRecipes(body);
  }
}
