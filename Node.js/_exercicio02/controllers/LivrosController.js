import express from 'express';
const router = express.Router();

import Livro from '../models/Livro.js';

router.get('/livros', function(req, res) {
    res.render('livros', { 
        Livro: Livro 
    });
});

export default router;