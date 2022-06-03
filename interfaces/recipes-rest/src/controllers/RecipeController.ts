import { Router } from "express";
import { Recipe } from "recipe-models/src/Recipe";
import { RandomRecipeFactory } from "recipe-models/src/factories/RandomRecipeFactory";

export default class RecipeController {
    private path = "/recipes";
    router: Router = Router();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.router.get(`${this.path}/:id`, (req, res) => {
            const id = parseInt(req.params.id);
            res.send(this.getRecipe(id))
        });
        this.router.get(`${this.path}`, (_, res) => {
            res.send(this.getRecipes())
        });
    }

    private getRecipe(id: number): Recipe {
        const recipe = RandomRecipeFactory(id);
        return recipe
    }
    private getRecipes(): Recipe[] {
        const recipes = [RandomRecipeFactory(), RandomRecipeFactory(), RandomRecipeFactory(), RandomRecipeFactory(),];
        return recipes
    }
}
