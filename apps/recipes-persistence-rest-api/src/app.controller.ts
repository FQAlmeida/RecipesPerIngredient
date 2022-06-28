import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { GetRecipesParamsType, GetRecipesReturnType } from 'contract-types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @HttpCode(200)
  async getRecipes(@Body() payload: GetRecipesParamsType)
    : Promise<GetRecipesReturnType> {
    return await this.appService.getRecipes(payload);
  }
}
