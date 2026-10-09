let plants;

export async function fetchAllPlants() {
    if (!plants) {
        const response = await fetch("https://www.plantsolve.com/api/v1/plants/index.json");
        plants = await response.json();
    }
    return plants;
}

let plantMap = new Map();

export async function fetchPlant(slug) {
    if (plantMap.get(slug)) {
        return plantMap.get(slug);
    }
    
    const response = await fetch(`https://www.plantsolve.com/api/v1/plants/${slug}.json`);
    const plant = await response.json();

    // const plantStringified = sanitizeXSS(JSON.stringify(plant));
    // const parsedPlant = JSON.parse(plantStringified);

    plantMap.set(slug, plant);
    return plant;
}

