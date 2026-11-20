import express from 'express';

const app = express();

import cors from 'cors';
app.use(cors({
    origin: "http://localhost:5173"
}));

/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */


import citiesRouter from './routers/citiesRouter.js';
app.use(citiesRouter);


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
        return
    }

    console.log("Server is running on port", 8080);
});
