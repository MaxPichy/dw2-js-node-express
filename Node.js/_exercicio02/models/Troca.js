import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';

const Troca = connection.define('trocas', {
    item: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idLivro: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idIntruso: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// const Troca = [
//     {
//         livro: 'Demian',
//         intruso: 'Zuko',
//         item: 'Pergaminho antigo de dobra de Fogo',
//     },
//     {
//         livro: 'Saga Rainha Vermelha',
//         intruso: 'Katara',
//         item: 'Uma cabaça de gelo de 30 gerações'
//     },
//     {
//         livro: 'Um Brinde de Cianureto',
//         intruso: 'Toph',
//         item: 'Uma aula dobre dobra de Metal'
//     },
//     {
//         livro: 'Mitologia Nórdica',
//         intruso: 'Aang',
//         item: 'Pergaminho antigo de dobra de Fogo'
//     },
//     {
//         livro: 'Saga Harry Potter',
//         intruso: 'Korra',
//         item: 'Pergaminho escrito à mão sobre a história do primeiro avatar, Wan'
//     }
// ];

Troca.sync({force: false});
export default Troca;