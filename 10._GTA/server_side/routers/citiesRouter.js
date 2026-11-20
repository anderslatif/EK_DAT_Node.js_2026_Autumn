import { Router } from 'express';

const router = Router();

router.get('/api/cities', (req, res) => {
    res.send({ data: ["Miami", "New York", "Los Angeles"] });
});


export default router;
