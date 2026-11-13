import { Router } from 'express';

const router = Router();

router.use("/room", ipLogger);

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

function butler(req, res, next) {
    if (req.query.name?.toLowerCase() === "steve") {
        return res.send({ data: "You are not allowed in, Steve" });
    }
    // I can add things to my req, so I could make a database call below
    // ... simulating a database call to retrieve user info
    // and then populate it to the request handler
    req.coatCondition = "off";
    next();
}

function doorway(req, res, next) {
    console.log("Come on in...");
    next();
}


router.get("/room", butler, doorway, (req, res, next) => {
    console.log("You are in the hallway and your coat is", req.coatCondition);
    next();
}, (req, res, next) => {
    console.log("You are in room 1");
    next();
    // res.send({ data: "You are in room 1" });
});

router.get("/room", (req, res, next) => {
    res.send({ data: "You are in room 2" });
});


export default router;