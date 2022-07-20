import { BadRequestException, Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ErrorMessage, GetRecipesParamsType, GetRecipesReturnType } from "@recipes-per-ingredient/contracts-types";

import { AppService } from "./app.service";

type ResponseType = GetRecipesReturnType | ErrorMessage

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @HttpCode(200)
  async getRecipes(@Body() payload: GetRecipesParamsType) {
    if (!payload.filter && !payload.take) {
      throw new BadRequestException({ "bad request": "payload should not be empty" });
    }
    return await this.appService.getRecipes(payload);
  }
}
