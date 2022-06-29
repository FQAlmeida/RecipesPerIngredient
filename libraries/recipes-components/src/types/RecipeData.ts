import { Recipe } from "@recipes-per-ingredient/recipes-models";

export interface RecipeData extends Pick<
    Recipe,
    "name" | "difficult_level" | "serves_adults" | "cooking_time" | "preparation_time"
> {
    recipe_image_url: string;
}
