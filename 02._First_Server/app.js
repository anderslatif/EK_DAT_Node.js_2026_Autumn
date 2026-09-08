const express = require('express');
const app = express();

// const app = require('express')();

// task Create a route for the endpoint / which returns a greeting
app.get('/', (req, res) => {
    res.send({ data: "Welcome to the API 0.0.1" });
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




app.listen(8080);