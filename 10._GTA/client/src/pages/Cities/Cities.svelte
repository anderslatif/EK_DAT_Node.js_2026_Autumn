<script>
    import { onMount } from "svelte";

    let cities = $state([]);

    onMount(async () => {
        const response = await fetch("http://localhost:8080/api/cities");
        const result = await response.json();
        cities = result.data;
    });

</script>

<h1>Cities</h1>

{#each cities as city}
    <h4>{city}</h4>
{/each}