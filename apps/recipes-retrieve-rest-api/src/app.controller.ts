import { Body, Controller, Get, HttpCode, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { RecipeRegister } from "recipe-models";
import { AppService } from "./app.service";

type RequestBody<T> = Request<unknown, unknown, T>;
export type GetRecipesRequestBody = RequestBody<string>;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getTop(@Param() qtd?: number | undefined): Promise<RecipeRegister[]> {
    return await this.appService.getTop(qtd || 20);
  }

  @Post()
  @HttpCode(200)
  async getWithIngredients(@Body() ingredients: string[]) {
    return await this.appService.getWithIngredients(ingredients);
  }
}
