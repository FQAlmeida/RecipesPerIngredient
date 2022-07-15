import { ErrorMessage, isInstanceOfError, RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import axios from "axios";
import { URL } from "url";


axios.defaults.validateStatus = function () {
    return true;
};

type RetrieveResponse = RecipeRegisterContract | ErrorMessage

export default async function getRecipesWithIngredients(req: { method: string, query: { id?: number; }; }, res, next) {
    if (req.method !== "GET") {
        res.status(401);
        next();
        return;
    }
    async function getRecipeById(id: number) {
        const host = process.env.RETRIEVE_URI + "/recipes" || "localhost:3000/recipes";
        const uri = new URL(host + `/${id}`);
        const response = await axios.get<RetrieveResponse>(uri.toString(), {
            headers: {
                "content-type": "application/json"
            }
        });
        const data = response.data;

        if (isInstanceOfError(data)) {
            res.status(data.statusCode);
            next();
            return;
        }

        const recipe = data

        function parseRecipe(recipe: RecipeRegisterContract): RecipeRegisterContract {
            return {
                ...recipe,
            };
        }
        return parseRecipe(recipe);
    }

    res.status(200).send(await getRecipeById(req.query.id));
}
