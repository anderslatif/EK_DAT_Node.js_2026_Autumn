<script>
    import { BASE_URL } from "../../stores/environmentVariablesStore.js";

    let crime = $state('Sneezing too loud');

    async function getWantedStatus() {
        const response = await fetch($BASE_URL + "/api/crimes");
        const result = await response.json();
        console.log(result);
    }

    async function commitCrime() {
        const response = await fetch($BASE_URL + "/api/crimes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ crime })
        });
        const result = await response.json();
        console.log(result);
    }
</script>

<h1>Grand Theft</h1>
<h3>Wanted Status: 0</h3>

<input bind:value={crime}>
<button onclick={commitCrime}>Commit Crime</button>