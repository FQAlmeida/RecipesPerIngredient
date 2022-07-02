import { RecipeRegister } from "@recipes-per-ingredient/contracts-types";

export async function getTopRecipes() {
    const response = await fetch(process.env.RETRIEVE_URI || "localhost:3000");
    const recipes: RecipeRegister[] = await response.json();
    return recipes;
}
