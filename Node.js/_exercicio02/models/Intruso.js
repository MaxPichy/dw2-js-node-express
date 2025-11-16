import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';

const Intruso = connection.define('intrusos', {
    foto: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    habilidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nacao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// const Intruso = [
//     {
//         foto: 'aang.png',
//         nome: 'Aang',
//         habilidade: 'Dobra de Ar, Água, Terra e Fogo',
//         nacao: 'Templo do Ar do Sul'
//     },
//     {
//         foto: 'katara.png',
//         nome: 'Katara',
//         habilidade: 'Dobra Água e Sangue',
//         nacao: 'Tribo da Água do Sul'
//     },
//     {
//         foto: 'korra.png',
//         nome: 'Korra',
//         habilidade: 'Dobra de Água, Terra, Fogo, Ar e Metal',
//         nacao: 'Tribo da Água do Sul'
//     },
//     {
//         foto: 'toph.png',
//         nome: 'Toph',
//         habilidade: 'Dobra de Terra e Metal',
//         nacao: 'Nação da Terra'
//     },
//     {
//         foto: 'zuko.png',
//         nome: 'Zuko',
//         habilidade: 'Dobra de Fogo e Raio',
//         nacao: 'Nação do Fogo'
//     }
// ];

Intruso.sync({force: false});
export default Intruso;