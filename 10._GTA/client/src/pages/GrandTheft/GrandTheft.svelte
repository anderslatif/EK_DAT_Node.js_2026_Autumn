<script>
    import { BASE_URL } from "../../stores/environmentVariablesStore.js";
    import { fetchGet, fetchPost } from "../../util/fetch.js";

    let crime = $state('Sneezing too loud');

    async function getWantedStatus() {
        const result = await fetchGet('/api/crimes');
        console.log(result);
    }

    async function commitCrime() {
        const result = await fetchPost('/api/crimes', { crime });
        console.log(result);

        getWantedStatus();
    }
</script>

<h1>Grand Theft</h1>
<h3>Wanted Status: 0</h3>

<input bind:value={crime}>
<button onclick={commitCrime}>Commit Crime</button>