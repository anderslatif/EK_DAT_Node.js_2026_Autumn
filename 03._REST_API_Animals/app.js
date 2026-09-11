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
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find((animal) => animal.id === providedId);

    if (!foundAnimal) {
        return res.status(404).send({ data: `No animal found by id ${providedId}` });
    }
    
    res.send({ data: foundAnimal });
});


// 2xx OK
// 3xx Redirect
// 4xx Client-side error
// 5xx Server-side error

app.listen(8080);
