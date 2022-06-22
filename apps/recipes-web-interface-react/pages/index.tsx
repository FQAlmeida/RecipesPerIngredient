import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { RandomRecipesFactory } from "recipe-models/src/factories/RandomRecipeFactory";
import { RandomMediaFactory } from "recipe-models/src/factories/RandomMediaFactory";

import { RecipeList } from "recipes-components-react/src/RecipesList/RecipeList";
import { RecipeData } from "recipes-components-react/src/types/RecipeData";

const Home: NextPage = () => {
    const [recipes, set_recipes] = useState<RecipeData[]>([]);
    const get_recipes = () => {
        const recipes_data = RandomRecipesFactory(20);
        return recipes_data.map((recipe_data) => {
            const media = RandomMediaFactory(recipe_data.cod);
            const recipe = Object.assign(recipe_data, { recipe_image_url: media.source });
            return recipe;
        });
    };
    useEffect(() => {
        set_recipes(get_recipes());
    }, []);
    return (
        <RecipeList recipes={recipes} />
    );
};

export default Home;
