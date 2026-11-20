import express from 'express';

const app = express();

import cors from 'cors';
app.use(cors({
    origin: "http://localhost:5173"
}));



import citiesRouter from './routers/citiesRouter.js';
app.use(citiesRouter);


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
        return
    }

    console.log("Server is running on port", 8080);
});
