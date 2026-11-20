import 'dotenv/config';

import express from 'express';

const app = express();

app.use(express.json());

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

import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))


import citiesRouter from './routers/citiesRouter.js';
app.use(citiesRouter);
import crimesRouter from './routers/crimesRouter.js';
app.use(crimesRouter);


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
        return
    }

    console.log("Server is running on port", 8080);
});
