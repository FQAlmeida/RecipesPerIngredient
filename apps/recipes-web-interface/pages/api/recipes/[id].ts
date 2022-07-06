import { RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import { URL, URLSearchParams } from "url";

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

        function parseRecipe(recipe: RecipeRegisterContract): (RecipeRegisterContract & {
            recipe_image_url: string;
        }) {
            return {
                ...recipe,
                recipe_image_url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmonpasta-11bb3f0.jpg?resize=960,872?quality=90&webp=true&resize=1024,740"
            };
        }
        return parseRecipe(recipe);
    }

    res.status(200).send(await getRecipeById(req.query.id));
}
