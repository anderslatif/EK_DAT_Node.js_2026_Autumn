let plants;

async function fetchPlants() {
    if (!plants) {
        const response = await fetch("https://www.plantsolve.com/api/v1/plants/index.json");
        plants = await response.json();
    }
    return plants;
}


export default fetchPlants;