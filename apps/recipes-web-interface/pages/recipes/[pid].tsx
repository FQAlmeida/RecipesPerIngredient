import type { NextPage } from "next";
import { convertToDuration, RecipeRegister } from "@recipes-per-ingredient/recipes-models";
import { Loading, RecipeDetail } from "@recipes-per-ingredient/recipes-components";

import useSWR from "swr";
import { RecipeRegisterContract } from "@recipes-per-ingredient/contracts-types";
import { useRouter } from "next/router";

type recipesState = RecipeRegister;

const fetcher = async (url: string): Promise<recipesState> => {
    const fetchResponse = await fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    });
    const jsonResponse: RecipeRegisterContract = await fetchResponse.json();
    console.log(jsonResponse);

    return {
        ...jsonResponse,
        preparation_time: convertToDuration(jsonResponse.preparation_time),
        cooking_time: jsonResponse.cooking_time ? convertToDuration(jsonResponse.cooking_time) : undefined
    };
};

const Recipe: NextPage = () => {
    const router = useRouter();

    const { pid } = router.query;
    const { data, error } = useSWR(`/api/recipes/${pid}`, fetcher);
    console.log(data);

    if (error) {
        return <p>Error {String(error)}</p>;
    }

    if (data === undefined) {
        return <Loading />;
    }

    return (
        <>
            <RecipeDetail recipe={data} />
        </>
    );
};

export default Recipe;
