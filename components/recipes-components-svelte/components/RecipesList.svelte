<script lang="ts">
    import Col from "sveltestrap/src/Col.svelte";
    import Container from "sveltestrap/src/Container.svelte";
    import Row from "sveltestrap/src/Row.svelte";
    import RecipeCard from "./Card/RecipeCard.svelte";

    import type { Duration } from "luxon";

    export let recipes: {
        recipeName: string;

        cooking_time?: Duration;
        preparation_time: Duration;

        difficulty: "easy" | "medium" | "hard" | string;

        serves_adults: number;

        recipeImageUri: string;
    }[];
</script>

<Container>
    <Row cols={{ lg: 4, md: 3, sm: 1 }}>
        {#each recipes as recipe}
            <Col>
                <RecipeCard {recipe} />
            </Col>
        {/each}
    </Row>
</Container>
