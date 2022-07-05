import { RecipeRegister } from "@recipes-per-ingredient/contracts-types";

export default async function getRecipesWithIngredients(req: { method: string, body: { ingredients: string[]; }; }, res) {
    if (req.method !== "POST") {
        res.status(401);
        return;
    }
    async function getRecipesWithIngredients(ingredients: string[]) {
        const response = await fetch(
            process.env.RETRIEVE_URI || "localhost:3000",
            {
                body: JSON.stringify({ ingredients }),
                method: "POST",
                headers: {
                    "content-type": "application/json"
                }
            });
        const recipes: RecipeRegister[] = await response.json();
        console.log(recipes);

        function parseRecipes(recipes: RecipeRegister[]): (RecipeRegister & {
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
    const response = await getRecipesWithIngredients(req.body.ingredients);
    console.log(response);
    res.status(200).send(response);
}
