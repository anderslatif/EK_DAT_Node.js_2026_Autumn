<script>
    import { onMount } from "svelte";

    import { BASE_URL } from "../../stores/environmentVariablesStore.js";

    let cities = $state([]);


    onMount(async () => {
        const response = await fetch($BASE_URL + "/api/cities");
        const result = await response.json();
        cities = result.data;
    });

</script>

<h1>Cities</h1>

{#each cities as city}
    <h4>{city}</h4>
{/each}