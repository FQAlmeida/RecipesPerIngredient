<script lang="ts">
    export let id: string;
    export let label: string;
    export let value: string;
</script>

<label for={id}>{label}:</label>
<input type="text" {id} name={id} bind:value />
