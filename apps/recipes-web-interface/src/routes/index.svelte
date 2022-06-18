<script lang="ts">
    import { RandomRecipesFactory } from "recipe-models/src/factories/RandomRecipeFactory";
    import { RandomMediaFactory } from "recipe-models/src/factories/RandomMediaFactory";
    import { Duration } from "recipe-models/src/exports/luxon";
    import RecipesList from "recipes-components-svelte/components/RecipesList.svelte";
    const recipes = RandomRecipesFactory(20);
    $: recipesData = recipes.map((recipe) => {
        return {
            recipeName: recipe.name,
            recipeImageUri: RandomMediaFactory(recipe.cod).source,
            cooking_time: recipe.steps.reduce((current_duration, step) => {
                return current_duration.plus(step.cooking_time);
            }, Duration.fromObject({ seconds: 0 })),
            preparation_time: recipe.steps.reduce((current_duration, step) => {
                return current_duration.plus(step.preparation_time);
            }, Duration.fromObject({ seconds: 0 })),
            difficulty: recipe.difficult_level.difficult.toString(),
            serves_adults: recipe.serves_adults,
        };
    });
</script>

<RecipesList recipes={recipesData} />
<p>hi</p>
