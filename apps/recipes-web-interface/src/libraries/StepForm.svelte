<script lang="ts">
    import { form, field } from "svelte-forms";
    import { Duration } from "recipe-models/src/exports/luxon";
    import TextBox from "forms/src/TextBox.svelte";
    import DurationPicker from "forms/src/DurationPicker.svelte";
    import type { Step } from "recipe-models/src/models/Step";
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
    export let getStep: (step: Omit<Step, "depends_on">) => void;

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
    let techniqueDescriptionField = field<string>(
        "techniqueDescriptionField${stepId}",
        "",
    );

    const handleChange = () => {
        getStep({
            description: $descriptionField.value,
            cooking_time: $cookingTimeField.value,
            preparation_time: $preparationTimeField.value,
            technique: { name: $techniqueField.value, description: "" },
            ingredients: [],
            tools: [],
        });
    };
</script>

<section>
    <TextBox
        id={`step_${stepId}_description`}
        label="Description"
        bind:value={$descriptionField.value}
    />
    <DurationPicker
        id={`step_${stepId}_cooking_duration`}
        label="Cooking Duration"
        bind:duration={$cookingTimeField.value}
    />
    <DurationPicker
        id={`step_${stepId}_preparation_duration`}
        label="Preparation Duration"
        bind:duration={$preparationTimeField.value}
    />
    <TextBox
        id={`step_${stepId}_technique`}
        label="Technique"
        bind:value={$techniqueField.value}
    />
    <TextBox
        id={`step_${stepId}_technique_description`}
        label="Technique Description"
        bind:value={$techniqueDescriptionField.value}
    />
</section>
