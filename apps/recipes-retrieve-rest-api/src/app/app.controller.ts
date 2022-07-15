import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(":qtd")
  async getTop(@Param() params: { qtd: string; }) {
    const { qtd } = params;
    const parsedQtd = parseInt(qtd);
    if (isNaN(parsedQtd)) {
      throw new BadRequestException();
    }
    return await this.appService.getTop(parsedQtd);
  }

  @Get("recipes/:id")
  async getById(@Param() params: { id: string; }){
    const { id } = params;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      throw new BadRequestException();
    }
    return await this.appService.getById(parsedId);
  }

  @Post()
  @HttpCode(200)
  async getWithIngredients(@Body() body: { ingredients: string[]; }) {
    return await this.appService.getWithIngredients(body.ingredients);
  }
}
