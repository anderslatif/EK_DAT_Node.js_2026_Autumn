import express from 'express';

const app = express();

import helmet from 'helmet';
app.use(helmet());


import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);
import authRouter from './routers/authRouter.js';
app.use(authRouter);


app.get("/{*splat}", (req, res) => {
    res.send(`
            <h1>404</h1>
            <h3>Not Found</h3>
        `);
});

app.all("/{*splat}", (req, res) => {
    res.status(404).send({ data: "The route doesn't exist" });
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
