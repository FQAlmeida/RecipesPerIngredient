import { RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import { URL } from "url";

export default async function getRecipesWithIngredients(req: { method: string, query: { id?: number; }; }, res, next) {
    if (req.method !== "GET") {
        res.status(401);
        next();
        return;
    }
    async function getRecipeById(id: number) {
        const host = process.env.RETRIEVE_URI + "/recipes" || "localhost:3000/recipes";
        const uri = new URL(host + `/${id}`);
        const response = await fetch(uri, {
            headers: {
                "content-type": "application/json"
            }
        });
        const recipe: RecipeRegisterContract = await response.json();
        console.log(recipe);

        function parseRecipe(recipe: RecipeRegisterContract): RecipeRegisterContract {
            return {
                ...recipe,
            };
        }
        return parseRecipe(recipe);
    }

    res.status(200).send(await getRecipeById(req.query.id));
}
