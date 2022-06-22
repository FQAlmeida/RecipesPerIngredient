<script lang="ts">
    export let id: string;
    export let label: string;
    export let selectedValue: object | string;
    export let options: typeof selectedValue[];
</script>

<label for={id}>{label}:</label>
<select {id} bind:value={selectedValue}>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>
