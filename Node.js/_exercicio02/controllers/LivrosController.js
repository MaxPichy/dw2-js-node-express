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

router.post('/livros/new', (req, res) => {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const ano = req.body.ano;

    Livro.create({
        titulo: titulo,
        autor: autor,
        ano: ano
    }).then(() => {
        res.redirect('/livros');
    }).catch(error => {
        console.log(error);
    });
});

router.get('/livros/edit/:id', (req, res) => {
    const id = req.params.id;

    Livro.findByPk(id).then(livro => {
        res.render('livroUpdate', {
            livro: livro
        });
    }).catch(error => {
        console.log(error);
    });
});

router.post('/livros/update/:id', (req, res) => {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const ano = req.body.ano;

    Livro.update({
        titulo: titulo,
        autor: autor,
        ano: ano
    },
    { where: { id: id }}).then(() => {
        res.redirect('/livros');
    }).catch(error => {
        console.log(error);
    });
});

router.get('/livros/delete/:id', (req, res) => {
    const id = req.params.id;

    Livro.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/livros');
    }).catch(error => {
        console.log(error);
    })
});

export default router;