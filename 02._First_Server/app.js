const express = require('express');
const app = express();

// const app = require('express')();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xss.html');
});

// callback function: a function reference provided as an argument with the posibility (perhaps) of being called

// functions as first-class citizens = I can do with functions what I can do with other data types

        // endpoint   // callback function
app.get('/blablabla', (req, res) => {
    res.send({ data: "They talk a lot but nothing is said" });
});
// the whole thing = route


// How can I send data in a GET request
// path variable:  /users/1
// query parameters: ?userId=1&likesProgramming=true  

// task create a /beers route
app.get('/beers/:beerType/:amount', (req, res) => {
    console.log(req.params);
    res.send({ data: `You ordered ${req.params.amount} of ${req.params.beerType}` });
});

// /bars/forgottenItems?wallet=200&keys=my house&my_baby=Sam
app.get('/bars/forgottenItems', (req, res) => {
    console.log(req.query);
    res.send({ data: req.query });
});

app.post('/dictators', (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
});

app.patch('/dictators/:name', (req, res) => {
    res.send({ data: `You have turned the great dictator - ${req.params.name} - benevolent for life` });
});


app.listen(8080);