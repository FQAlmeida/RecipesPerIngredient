<script lang="ts">
    import TextBox from "forms-svelte/src/TextBox.svelte";
    import OptionBox from "forms-svelte/src/OptionBox.svelte";
    import NumberPicker from "forms-svelte/src/NumberPicker.svelte";

    import { form, field } from "svelte-forms";

    import { DifficultLevelEnum } from "recipe-models/src/models/Recipe";
    import StepForm from "../libraries/StepForm.svelte";
    const options = Object.values(DifficultLevelEnum);

    let stepsCount = 1;

    const recipeName = field("recipeName", "");
    const recipeDifficulty = field<DifficultLevelEnum>(
        "recipeDifficulty",
        DifficultLevelEnum.MEDIUM
    );
    const recipeServesAdults = field<number>("recipeServesAdults", 2);

    const recipeForm = form(recipeName, recipeDifficulty, recipeServesAdults);
</script>

<section>
    <TextBox
        id="txtRecipeName"
        label="Recipe Name"
        bind:value={$recipeName.value}
    />
    <OptionBox
        id="selectRecipeDifficult"
        label="Difficulty"
        bind:selectedValue={$recipeDifficulty.value}
        {options}
    />
    <NumberPicker
        id="numberPickerServesAdults"
        label="Serves Adults"
        bind:value={$recipeServesAdults.value}
    />
    {#each { length: stepsCount } as _, index}
        <StepForm getStep={() => {}} stepId={index} />
    {/each}
    <button on:click={() => (stepsCount += 1)}>Add Step</button>
</section>
