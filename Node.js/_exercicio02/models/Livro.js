import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';

const Livro = connection.define('livros', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    // {
    //     titulo: 'Demian',
    //     autor: 'Herman Hesse',
    //     ano: '1919',
    // },
    // {
    //     titulo: 'Saga Rainha Vermelha',
    //     autor: 'Victoria Aveyard',
    //     ano: '2015'
    // },
    // {
    //     titulo: 'Um Brinde de Cianureto',
    //     autor: 'Agatha Christie',
    //     ano: '1944'
    // },
    // {
    //     titulo: 'Mitologia Nórdica',
    //     autor: 'Neil Gaiman',
    //     ano: '2017'
    // },
    // {
    //     titulo: 'Saga Harry Potter',
    //     autor: 'JK Rowling',
    //     ano: '1997'
    // }
});

Livro.sync({ force: false });
export default Livro;