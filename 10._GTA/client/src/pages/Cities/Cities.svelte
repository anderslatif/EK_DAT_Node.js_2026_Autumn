<script>
    import { onMount } from "svelte";

    import { fetchGet } from "../../util/fetch.js";

    let cities = $state([]);


    onMount(async () => {
        // const result = await fetchGet("/api/cities");
        // cities = result.data;
        cities = (await fetchGet("/api/cities")).data;
    });

</script>

<h1>Cities</h1>

{#each cities as city}
    <h4>{city}</h4>
{/each}