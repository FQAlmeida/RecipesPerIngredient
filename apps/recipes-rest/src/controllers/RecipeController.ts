import { Request, Router } from "express";
import { Recipe, RecipeRegister } from "recipe-models/src/models/Recipe";
import { RandomRecipeFactory } from "recipe-models/src/factories/RandomRecipeFactory";
import { getRecipes as resolveRecipes } from "../persistence/getRecipes";

export default class RecipeController {
    private path = "/recipes";
    router: Router = Router();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.router.get(`${this.path}/:id`, async (req: Request<{ id: string; }>, res, next) => {
            const id = parseInt(req.params.id);
            const recipe = await this.getRecipe(id);
            if (recipe) {
                res.send(recipe);
                return;
            }
            res.statusCode = 404;
            next();
        });
        this.router.get(`${this.path}`, (_, res, next) => {
            const recipes = this.getRecipes();
            if (recipes) {
                res.send(recipes);
                return;
            }
            res.statusCode = 404;
            next();
        });
        this.router.post(`${this.path}`, (req: Request<unknown, unknown, Recipe>, res, next) => {
            const recipe = req.body;
            const recipe_register = this.createRecipe(recipe);
            if (recipe_register) {
                res.statusCode = 201;
                res.send(recipe_register);
                return;
            }
            res.statusCode = 400;
            next();
        });
    }

    private async getRecipe(id: number): Promise<RecipeRegister | undefined> {
        const recipe = await resolveRecipes([{
            filter: {
                cod_recipe: {
                    equals: id
                }
            }
        }]);
        return recipe;
    }
    private getRecipes(): Recipe[] {
        const recipes = [RandomRecipeFactory(), RandomRecipeFactory(), RandomRecipeFactory(), RandomRecipeFactory(),];
        return recipes;
    }

    private createRecipe(recipe: Recipe): RecipeRegister | undefined {
        // TODO: Add a recipe to the DB
        return;
    }
}
