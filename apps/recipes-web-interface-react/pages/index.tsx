import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { RandomMediaFactory } from "recipe-models/src/factories/RandomMediaFactory";
import { RandomRecipesFactory } from "recipe-models/src/factories/RandomRecipeFactory";
import { RecipeRegister } from "recipe-models/src/models/Recipe";
import { IngredientsFilterForm } from "recipes-components-react/src/RecipesFilter";
import { RecipeList } from "recipes-components-react/src/RecipesList";
import { Loading } from "recipes-components-react/src/Loading";

type recipesState = (RecipeRegister & {
    recipe_image_url: string;
})[];

const Home: NextPage = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipes, set_recipes] = useState<recipesState>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<recipesState>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
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

    useEffect(() => {
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
        setLoading(true);
        setFilteredRecipes(filterRecipes());
        setLoading(false);
    }, [ingredients, recipes]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <IngredientsFilterForm onIngredientsChange={(ingredients) => setIngredients(ingredients)} />
            <RecipeList recipes={filteredRecipes} />
        </>
    );
};

export default Home;
