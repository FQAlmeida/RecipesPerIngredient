<script lang="ts">
    import { Duration } from "luxon";
    export let duration: Duration;
    export let id: string;
    export let label: string;
    let value = "00";
    const updateDuration = () => {
        if (value.match(/([0-9]{1,2}:)[0-9]{1,2}/g)) {
            duration = Duration.fromObject({
                seconds: 0,
            });
        } else {
            console.log(value);
        }
    };
</script>

<label for={id}>{label}:</label>
<input
    type="text"
    bind:value
    on:change={() => {
        updateDuration();
    }}
    required
/>
