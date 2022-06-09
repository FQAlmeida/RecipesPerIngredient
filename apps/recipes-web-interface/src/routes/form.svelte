<script lang="ts">
    import TextBox from "forms/src/TextBox.svelte";
    import OptionBox from "forms/src/OptionBox.svelte";
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
    const options = Object.values(DifficultLevelEnum)
    console.log(options);
    
</script>

<div>
    <TextBox id="txtRecipeName" label="Recipe Name" bind:value={recipe.name} />
    <OptionBox id="selectDifficult" label="Difficulty" bind:selectedValue={recipe.difficult_level.difficult} {options}/>
</div>
