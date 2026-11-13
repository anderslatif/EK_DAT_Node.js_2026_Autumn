import { Router } from 'express';

const router = Router();

router.get("/banhmi/order", (req, res) => {
    console.log("Banh Mi Amount", req.session.banhmiAmount);
    if (!req.session.banhmiAmount) {
        return res.send({ data: "All out of banh mi" });
    }
    req.session.banhmiAmount -= 1;
    res.send({ data: "Gobble up" });
});

router.get("/banhmi/restock", (req, res) => {
    req.session.banhmiAmount = 5;
    res.send({ data: "restock" });
});

router.get("/banhmi/mobsterrun", (req, res) => {
    // req.session.banhmiAmount = undefined;
    req.session.destroy(() => {
        res.send({ data: "The store is closed forever" });
    })
});


export default router;
