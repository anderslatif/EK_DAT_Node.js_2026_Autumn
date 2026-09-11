const express = require('express');

const app = express();

const animals = [
    { id: 1, name: "Parrot", age: 34 },
    { id: 2, name: "Pelican", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Australian_Pelican_showing_large_pouch.jpg" }
];

app.get('/animals', (req, res) => {
    res.send({ data: animals });
});

app.get("/animals/:id", (req, res) => {

});

app.listen(8080);
