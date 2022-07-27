import { ErrorMessage, isInstanceOfError, RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import axios from "axios";

axios.defaults.validateStatus = function () {
    return true;
};
type RetrieveResponse = RecipeRegisterContract[] | ErrorMessage
export default async function getRecipesWithIngredients(req: { method: string, body: { ingredients: string[]; }; }, res) {
    if (req.method !== "POST") {
        res.status(401);
        return;
    }
    async function getRecipesWithIngredients(ingredients: string[]) {
        const response = await axios.post<RetrieveResponse>(
            process.env.RETRIEVE_URI || "localhost:3000",
            {ingredients},
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                }
            });
        const data = response.data
        if (isInstanceOfError(data)) {
            res.status(data.statusCode);
            return;
        }
        const recipes: RecipeRegisterContract[] = data;
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
    console.log(response);
    
    res.status(200).send(response);
}
