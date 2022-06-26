import { Controller, Get } from "@nestjs/common";
import { RecipeRegister } from "recipe-models/src/models/Recipe";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getTop(qtd?: number): Promise<RecipeRegister[]> {
    return await this.appService.getTop(qtd || 20);
  }
  @Get()
  async getWithIngredients(ingredients?: string[]) {
    return await this.appService.getWithIngredients(ingredients);
  }
}
