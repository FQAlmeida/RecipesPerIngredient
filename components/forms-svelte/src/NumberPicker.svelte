<script lang="ts">
    export let id: string;
    export let label: string;
    export let value: number;
</script>

<label for={id}>{label}:</label>
<input type="number" {id} name={id} bind:value />
