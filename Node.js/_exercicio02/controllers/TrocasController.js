import express from 'express';
const router = express.Router();

import Troca from '../models/Troca.js';
import Intruso from '../models/Intruso.js';
import Livro from '../models/Livro.js';

router.get('/trocas', function(req, res) {
    Troca.findAll().then(trocas => {
        res.render('trocas', { 
            trocas 
        });
    }).catch(error => {
        console.log(error);
    })
});

router.post('/trocas/new', async(req, res) => {
    const intrusoNome = req.body.intrusoNome;
    const livroTitulo = req.body.livroTitulo;
    const item = req.body.item;

    const intruso = await Intruso.findOne({
        where: {nome: intrusoNome}
    });

    const livro = await Livro.findOne({
        where: {titulo: livroTitulo}
    });

    Troca.create({
        idLivro: livro.id,
        idIntruso: intruso.id,
        item: item
    }).then(() => {
        res.redirect('/trocas');
    }).catch(error => {
        console.log(error);
    });
});

router.get('/trocas/edit/:id', (req, res) => {
    const id = req.params.id;

    Troca.findByPk(id).then(troca => {
        res.render('trocaUpdate', {
            troca
        });
    }).catch(error => {
        console.log(error);
    });
});

router.post('/trocas/update/:id', (req, res) => {
    const id = req.params.id;
    const idIntruso = req.body.idIntruso;
    const idLivro = req.body.idLivro;
    const item = req.body.item;

    Troca.update({
        idIntruso: idIntruso,
        idLivro: idLivro,
        item: item
    }, 
    { where: {id: id}}).then(() => {
        res.redirect('/trocas');
    }).catch(error => {
        console.log(error);
    });
});

router.get('/trocas/delete/:id', (req, res) => {
    const id = req.params.id;

    Troca.destroy({
        where: {id: id}
    }).then(() => {
        res.redirect('/trocas');
    }).catch(error => {
        console.log(error);
    });
});

export default router;