import { Router } from 'express';

const router = Router();

/* 
    authentication: proving you are who you are
    authorization: proving that you have permission to access certain resources
*/

function isAdmin(req, res, next) {
    // this simulates getting data from the database
    // ...
    const isAdmin = true;
    if (isAdmin) {
        next();
    }
    res.status(403).send();
}


router.get('/dashboard', isAdmin, (req, res) => {
    res.send({ data: "Secret Dashboard" });
});


export default router;
