import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { RecipeRegister } from "@recipes-per-ingredient/contracts-types";

import { AppService } from "./app.service";

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
