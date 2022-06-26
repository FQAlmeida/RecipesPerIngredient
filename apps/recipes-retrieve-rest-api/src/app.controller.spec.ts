import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import type { RecipeRegister } from "recipe-models/src/models/Recipe";
import { RandomRecipesFactory } from "recipe-models/src/factories/RandomRecipeFactory";

const qtdResult = 1
const staticResult = RandomRecipesFactory(qtdResult);

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return top 20 recipes', () => {
      jest.mock("recipe-models/src/factories/RandomRecipeFactory", () => {
        const originalModule = jest.requireActual('recipe-models/src/factories/RandomRecipeFactory');
        return {
          __esModule: true,
          ...originalModule,
          RandomRecipesFactory: () => staticResult,
        };
      });
      
      const result: RecipeRegister[] = RandomRecipesFactory(20);

      expect(appController.getTop()).toBe(result);
    });
  });
});
