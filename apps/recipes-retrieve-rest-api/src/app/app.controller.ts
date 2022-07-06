import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import {  RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getTop(@Param() qtd: number): Promise<RecipeRegisterContract[]> {
    if(isNaN(qtd)){
      qtd = 20;
    }
    return await this.appService.getTop(qtd || 20);
  }

  @Post()
  @HttpCode(200)
  async getWithIngredients(@Body() body: {ingredients: string[]}) {
    return await this.appService.getWithIngredients(body.ingredients);
  }
}
