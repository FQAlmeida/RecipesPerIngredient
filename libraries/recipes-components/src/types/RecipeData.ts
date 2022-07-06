import { Recipe } from "@recipes-per-ingredient/recipes-models";
import { Duration } from "luxon";

export interface RecipeData extends Pick<
    Recipe,
    "name" | "difficult_level" | "serves_adults" | "cooking_time" | "preparation_time"
> {
    cooking_time?: Duration,
    preparation_time: Duration;
    recipe_image_url: string;
}
