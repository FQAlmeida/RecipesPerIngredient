import { RecipeRegister } from "contract-types";

export async function getTopRecipes() {
    const response = await fetch("retrieve-container/20");
    const recipes: RecipeRegister[] = await response.json();
    return recipes;
}
