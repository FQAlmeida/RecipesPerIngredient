<script lang="ts">
    import TextBox from "forms/src/TextBox.svelte";
    import OptionBox from "forms/src/OptionBox.svelte";
    import NumberPicker from "forms/src/NumberPicker.svelte";

    import {} from "sveltik"

    import {
        DifficultLevelEnum,
        type Recipe,
    } from "recipe-models/src/models/Recipe";
    let recipe: Recipe = {
        name: "",
        difficult_level: {
            difficult: DifficultLevelEnum.MEDIUM,
        },
        serves_adults: 2,
        steps: [],
    };
    const options = Object.values(DifficultLevelEnum);
</script>

<Sveltik>
    <TextBox id="txtRecipeName" label="Recipe Name" bind:value={recipe.name} />
    <OptionBox
        id="selectRecipeDifficult"
        label="Difficulty"
        bind:selectedValue={recipe.difficult_level.difficult}
        {options}
    />
    <NumberPicker
        id="numberPickerServesAdults"
        label="Serves Adults"
        bind:value={recipe.serves_adults}
    />
</div>
