import type { NextPage } from "next";
import { useState } from "react";
import { convertToDuration, RecipeRegister } from "@recipes-per-ingredient/recipes-models";
import { IngredientsFilterForm } from "@recipes-per-ingredient/recipes-components";
import { RecipeList } from "@recipes-per-ingredient/recipes-components";
import { Loading } from "@recipes-per-ingredient/recipes-components";

import useSWR from "swr";
import { RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import { Container } from "@mui/material";

type recipesState = RecipeRegister[];

const fetcher = async (params: { baseUrl: string, ingredients: string[]; }): Promise<recipesState> => {
    const { ingredients, baseUrl } = params;

    let url: string, method: string;
    if (!ingredients || ingredients.length === 0) {
        url = `${baseUrl}/top/20`;
        method = "GET";
    } else {
        url = `${baseUrl}/recipes`;
        method = "POST";
    }
    const fetchResponse = await fetch(url, {
        method: method,
        headers: {
            "content-type": "application/json"
        },
        body: method === "POST" ? JSON.stringify({ ingredients }) : undefined
    });
    const jsonResponse: RecipeRegisterContract[] = await fetchResponse.json();
    if (!jsonResponse) {
        return await fetcher({ baseUrl: "/api", ingredients: [] });
    }
    const response = jsonResponse.map<RecipeRegister>((recipe) => {
        return {
            ...recipe,
            preparation_time: convertToDuration(recipe.preparation_time),
            cooking_time: recipe.cooking_time ? convertToDuration(recipe.cooking_time) : undefined
        };
    });
    return response;
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
        <Container>
            <IngredientsFilterForm onIngredientsChange={(ingredients) => setIngredients(ingredients)} />
            <RecipeList recipes={data} />
        </Container>
    );
};

export default Home;
