<script lang="ts">
    import { form, field } from "svelte-forms";
    import { Duration } from "recipe-models/src/exports/luxon";
    import TextBox from "forms/src/TextBox.svelte";
    export let stepId: number;
    // const step: Step = {
    //     cooking_time: 0,
    //     description: "",
    //     ingredients: [],
    //     tools: [],
    //     preparation_time: 0,
    //     depends_on: 0,
    //     technique: null,
    // };
    export const getStep = () => {};
    let cookingTimeField = field<Duration>(
        "cookingTimeField${stepId}",
        Duration.fromMillis(0)
    );
    let descriptionField = field<string>("descriptionField${stepId}", "");
    let preparationTimeField = field<Duration>(
        "preparationTimeField${stepId}",
        Duration.fromMillis(0)
    );
    let techniqueField = field<string>("techniqueField${stepId}", "");
</script>

<section>
    <TextBox
        id={`step_${stepId}_description`}
        label="Description"
        bind:value={$descriptionField.value}
    />
</section>
