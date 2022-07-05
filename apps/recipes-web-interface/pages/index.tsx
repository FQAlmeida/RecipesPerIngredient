import type { NextPage } from "next";
import { useState } from "react";
import { RecipeRegister } from "@recipes-per-ingredient/recipes-models";
import { IngredientsFilterForm } from "@recipes-per-ingredient/recipes-components";
import { RecipeList } from "@recipes-per-ingredient/recipes-components";
import { Loading } from "@recipes-per-ingredient/recipes-components";

import useSWR from "swr";

type recipesState = (RecipeRegister & {
    recipe_image_url: string;
})[];

const fetcher = async (params: { baseUrl: string, ingredients: string[]; }) => {
    const { ingredients, baseUrl } = params;
    console.log(ingredients);

    let url: string, method: string;
    if (!ingredients || ingredients.length === 0) {
        console.log("Loading top 20");

        url = `${baseUrl}/top/20`;
        method = "GET";
    } else {
        url = `${baseUrl}/recipes`;
        method = "POST";
    }
    const response = await fetch(url, {
        method: method,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ ingredients })
    });
    const jsonResponse: recipesState = await response.json();
    console.table(response);
    console.table(jsonResponse);
    if (!jsonResponse) {
        return await fetcher({ baseUrl: "/api", ingredients: [] });
    }
    return jsonResponse;
};

const Home: NextPage = () => {
    const [ingredients, setIngredients] = useState<string[]>(["macarrão"]);
    const { data, error } = useSWR("/api", (baseUrl) => fetcher({ baseUrl, ingredients }));

    if (error) {
        return <p>Error {String(error)}</p>;
    }

    if (data === undefined) {
        return <Loading />;
    }

    return (
        <>
            <IngredientsFilterForm onIngredientsChange={(ingredients) => setIngredients(ingredients)} />
            <RecipeList recipes={data} />
        </>
    );
};

export default Home;
