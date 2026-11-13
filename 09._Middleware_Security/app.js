import express from 'express';

const app = express();

import helmet from 'helmet';
app.use(helmet());



import { rateLimit } from 'express-rate-limit';

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
});

app.use(limiter);

const authenticationLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
});

app.use('/auth', authenticationLimiter);


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
