import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { RandomMediaFactory } from "recipe-models/src/factories/RandomMediaFactory";
import { RandomRecipesFactory } from "recipe-models/src/factories/RandomRecipeFactory";
import { RecipeRegister } from "recipe-models/src/models/Recipe";
import { IngredientsFilterForm } from "recipes-components-react/src/RecipesFilter";
import { RecipeList } from "recipes-components-react/src/RecipesList";

const Home: NextPage = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipes, set_recipes] = useState<(RecipeRegister & {
        recipe_image_url: string;
    })[]>([]);

    useEffect(() => {
        const get_recipes = () => {
            const recipes_data = RandomRecipesFactory(100);
            return recipes_data
                .map((recipe_data) => {
                    const media = RandomMediaFactory(recipe_data.cod);
                    const recipe = Object.assign(recipe_data, { recipe_image_url: media.source });
                    return recipe;
                });
        };
        set_recipes(get_recipes());
    }, []);
    const filterRecipes = () => {
        if (!ingredients || ingredients.length <= 0) {
            return recipes;
        }
        return recipes.filter((recipe_data) => {
            for (const ingredientFilter of ingredients) {
                if (recipe_data.ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(ingredientFilter.toLowerCase())).length > 0) {
                    return true;
                }
            }
            return false;
        });
    };
    return (
        <>
            <IngredientsFilterForm onIngredientsChange={(ingredients) => setIngredients(ingredients)} />
            <RecipeList recipes={filterRecipes()} />
        </>
    );
};

export default Home;
