import express from 'express';
const app = express();

app.use(express.static('public'));

import { fetchAllPlants, fetchPlant } from './util/fetchPlants.js';

import fs from 'fs';

const header = fs.readFileSync('public/components/header/header.html', 'utf-8');
const footer = fs.readFileSync('public/components/footer/footer.html', 'utf-8');

// <link rel="stylesheet" href="/pages/frontpage/frontpage.css" />
const frontpage = fs.readFileSync('public/pages/frontpage/frontpage.html', 'utf-8');
const about = fs.readFileSync('public/pages/about/about.html', 'utf-8');

const frontpagePage = header + frontpage + footer;
const aboutPage = header + about + footer;

// ===================================================================
// Pages
// ===================================================================
app.get('/', (req, res) => {
    res.send(frontpagePage);
});

app.get('/about', (req, res) => {
    res.send(aboutPage);
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
