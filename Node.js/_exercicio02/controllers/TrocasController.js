import express from 'express';
const router = express.Router();

import Troca from '../models/Troca.js';

router.get('/trocas', function(req, res) {
    res.render('trocas', { 
        Troca: Troca 
    });
});

export default router;