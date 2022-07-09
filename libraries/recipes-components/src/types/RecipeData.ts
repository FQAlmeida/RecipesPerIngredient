import { RecipeRegister } from "@recipes-per-ingredient/contracts-types";
import { Duration } from "luxon";

export interface RecipeData extends Pick<
    RecipeRegister,
    "cod" | "name" | "difficult_level" | "serves_adults" | "cooking_time" | "preparation_time" | "medias"
> {
    cooking_time?: Duration,
    preparation_time: Duration;
}
