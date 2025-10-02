// Importando o Sequelize
import Sequelize from "sequelize";

// Criando os dados de conexão com o bd
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    timezone: '-03:00',

    // Definindo o banco de dados da aplicação
    database: 'nossaloja'
});

export default connection;