<script lang="ts">
    import type { Duration } from "luxon";

    import Card from "sveltestrap/src/Card.svelte";
    import CardBody from "sveltestrap/src/CardBody.svelte";
    import CardFooter from "sveltestrap/src/CardFooter.svelte";
    import CardImg from "sveltestrap/src/CardImg.svelte";
    import CardImgOverlay from "sveltestrap/src/CardImgOverlay.svelte";
    import Badge from "sveltestrap/src/Badge.svelte";

    export let recipe: {
        recipeName: string;

        cooking_time?: Duration;
        preparation_time: Duration;

        difficulty: "easy" | "medium" | "hard" | string;

        serves_adults: number;

        recipeImageUri: string;
    };
</script>

<Card>
    <CardBody class="position-relative">
        <CardImg src={recipe.recipeImageUri} />
        <CardImgOverlay>
            <h1 class="recipe-name">
                {recipe.recipeName}
            </h1>
        </CardImgOverlay>
    </CardBody>
    <CardFooter>
        <Badge>Serves {recipe.serves_adults} Adults</Badge>
        <Badge>Level: {recipe.difficulty.toUpperCase()}</Badge>
        <Badge
            >Prep Time: {recipe.preparation_time
                .shiftTo("minutes")
                .toHuman()}</Badge
        >
        {#if recipe.cooking_time}
            <Badge
                >Cook Time: {recipe.cooking_time
                    .shiftTo("minutes")
                    .toHuman({})}</Badge
            >
        {/if}
    </CardFooter>
</Card>

<style>
    .recipe-name {
        position: absolute;
        right: 0.75em;
        bottom: 0.5em;
        color: whitesmoke;
        margin: 0;
        padding: 0 0.1em;
        box-sizing: border-box;
        width: fit-content;
        height: fit-content;
        background-color: rgba(1, 1, 1, 0.3);
        border-radius: 10px;
    }
</style>
