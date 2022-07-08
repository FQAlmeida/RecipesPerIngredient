import { RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";

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
        const recipes: RecipeRegisterContract[] = await response.json();
        console.log(ingredients, recipes);

        function parseRecipes(recipes: RecipeRegisterContract[]): RecipeRegisterContract[] {
            return recipes.map((recipe) => {
                return {
                    ...recipe
                };
            });
        }
        return parseRecipes(recipes);
    }
    const response = await getRecipesWithIngredients(req.body.ingredients);
    res.status(200).send(response);
}
