import { RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import { RecipeRegister } from "@recipes-per-ingredient/recipes-models";
import { URL, URLSearchParams } from "url";

export default async function getRecipesWithIngredients(req: { method: string, query: { qtd?: number; }; }, res) {
    if (req.method !== "GET") {
        res.status(401);
        return;
    }
    async function getTopRecipes(qtd?: number) {
        const host = process.env.RETRIEVE_URI || "localhost:3000";
        const uri = new URL(host);
        if (qtd === undefined) {
            qtd = 20;
        }
        const params = new URLSearchParams({
            qtd: String(qtd)
        });
        uri.search = params.toString();
        const response = await fetch(uri, {
            headers: {
                "content-type": "application/json"
            }
        });
        const recipes: RecipeRegisterContract[] = await response.json();
        function parseRecipes(recipes: RecipeRegisterContract[]): (RecipeRegister & {
            recipe_image_url: string;
        })[] {
            return recipes.map((recipe) => {
                return {
                    ...recipe,
                    recipe_image_url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmonpasta-11bb3f0.jpg?resize=960,872?quality=90&webp=true&resize=1024,740"
                };
            });
        }
        return parseRecipes(recipes);
    }

    res.status(200).send(await getTopRecipes(req.query.qtd));
}
