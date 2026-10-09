import express from 'express';
const app = express();

import path from 'path';

app.use(express.static('public'));

import { fetchAllPlants, fetchPlant } from './util/fetchPlants.js';



// ===================================================================
// Pages
// ===================================================================
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/pages/about/about.html'));
});


// ===================================================================
// API
// ===================================================================
app.get('/api/plants', async (req, res) => {
    res.send({ data: await fetchAllPlants() });
});

app.get('/api/plants/:plantSlug', async (req, res) => {
    res.send({ data: await fetchPlant(req.params.plantSlug)});
});


// ===================================================================

// short-circuit operator
// console.log(undefined || 0 || "" || 8080 || true);
// console.log(false && 8080 && null);

// nullish coalescence 
// console.log("" ?? 8080);

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log('Server is running on port', server.address().port);
});
