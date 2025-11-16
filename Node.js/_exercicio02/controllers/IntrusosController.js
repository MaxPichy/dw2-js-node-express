import express from 'express';
const router = express.Router();

import Intruso from '../models/Intruso.js';
import { where } from 'sequelize';

router.get('/intrusos', function(req, res) {
    Intruso.findAll().then(intrusos => {
        res.render('intrusos', { 
            intrusos
        });
    }).catch(error => {
        console.log(error);
    });
});

router.post('/intrusos/new', (req, res) => {
    const foto = req.body.foto;
    const nome = req.body.nome;
    const habilidade = req.body.habilidade;
    const nacao = req.body.nacao;

    Intruso.create({
        // foto:
        nome: nome,
        habilidade: habilidade,
        nacao: nacao
    }).then(() => {
        res.redirect('/intrusos');
    }).catch(error => {
        console.log(error);
    });
});

router.get('/intrusos/edit/:id', (req, res) => {
    const id = req.params.id;

    Intruso.findByPk(id).then(intruso => {
        res.render('intrusoUpdate', {
            intruso: intruso
        });
    }).catch(error => {
        console.log(error);
    });
});

router.post('/intrusos/update/:id', (req, res) => {
    const id = req.params.id;
    const foto = req.body.foto;
    const nome = req.body.nome;
    const habilidade = req.body.habilidade;
    const nacao = req.body.nacao;

    Intruso.update({
        // foto: foto,
        nome: nome,
        habilidade: habilidade,
        nacao: nacao
    }, 
    { where: { id: id }}).then(() => {
        res.redirect('/intrusos');
    }).catch(error => {
        console.log(error);
    });
});

router.get('/intrusos/delete/:id', (req, res) => {
    const id = req.params.id;

    Intruso.destroy({
        where: {id: id}
    }).then(() => {
        res.redirect('/intrusos');
    }).catch(error => {
        console.log(error);
    })
});

export default router;