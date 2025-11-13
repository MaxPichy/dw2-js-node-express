import express from 'express';
const router = express.Router();

import Livro from '../models/Livro.js';

router.get('/livros', function(req, res) {
    Livro.findAll().then(livros => {
        res.render('livros', { 
            livros
        });
    }).catch(error => {
        console.log(error);
    });
});

// router.post("livros/create", (req, res) => {

// });

export default router;