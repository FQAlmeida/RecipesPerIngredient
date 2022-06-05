import { Request, Router } from "express";
import { Recipe } from "recipe-models/src/models/Recipe";
import { RandomRecipeFactory } from "recipe-models/src/factories/RandomRecipeFactory";

export default class RecipeController {
    private path = "/recipes";
    router: Router = Router();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.router.get(`${this.path}/:id`, (req: Request<{ id: number; }>, res) => {
            const id = req.params.id;
            res.send(this.getRecipe(id));
        });
        this.router.get(`${this.path}`, (_, res) => {
            res.send(this.getRecipes());
        });
        this.router.post(`${this.path}`, (req: Request<unknown, unknown, Recipe>, res, next) => {
            const recipe = req.body;
            res.statusCode = 201;
            next();
        });
    }

    private getRecipe(id: number): Recipe {
        const recipe = RandomRecipeFactory(id);
        return recipe;
    }
    private getRecipes(): Recipe[] {
        const recipes = [RandomRecipeFactory(), RandomRecipeFactory(), RandomRecipeFactory(), RandomRecipeFactory(),];
        return recipes;
    }

    private createRecipe(recipe: Recipe) {
        // TODO: Add a recipe to the DB
        
    }
}
