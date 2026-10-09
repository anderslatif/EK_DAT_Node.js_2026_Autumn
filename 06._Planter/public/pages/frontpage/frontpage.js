fetch('/api/plants')
.then((response) => response.json())
.then((result) => {
    const plantsListDataList = document.getElementById('plants-list');


    result.data.forEach((plant) => {
        const plantsListOption = document.createElement('option');
        plantsListOption.value = plant.slug;
        
        plantsListDataList.appendChild(plantsListOption);
    });
});

async function addPlant() {
    const plantSlug = document.getElementById('plants-list-search-input').value;
    const plantsSection = document.getElementById('plants');


    const response = await fetch(`/api/plants/${plantSlug}`);
    const result = await response.json();
    const plant = result.data;
    
    const plantsDiv = document.createElement('div');
    plantsDiv.innerHTML = `
        <h3>New Plant</h3>
    `;
}