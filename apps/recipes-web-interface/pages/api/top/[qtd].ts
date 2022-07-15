import { ErrorMessage, isInstanceOfError, RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import axios from "axios";
import { URL } from "url";

axios.defaults.validateStatus = function () {
    return true;
  };
  type RetrieveResponse = RecipeRegisterContract[] | ErrorMessage
export default async function getTopRecipes(req: { method: string, query: { qtd?: number; }; }, res) {
    if (req.method !== "GET") {
        res.status(401);
        return;
    }
    async function getTopRecipes(qtd?: number) {
        const host = process.env.RETRIEVE_URI || "localhost:3000";
        if (qtd === undefined) {
            qtd = 20;
        }
        const uri = new URL(host + `/${qtd}`);
        const response = await axios.get<RetrieveResponse>(uri.toString(), {
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

    res.status(200).send(await getTopRecipes(req.query.qtd));
}
