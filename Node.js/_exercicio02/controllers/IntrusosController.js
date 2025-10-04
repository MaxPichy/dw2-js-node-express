import express from 'express';
const router = express.Router();

import Intruso from '../models/Intruso.js';

router.get('/intrusos', function(req, res) {
    res.render('intrusos', { 
        Intruso: Intruso 
    });
});

export default router;