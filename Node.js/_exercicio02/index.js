// express
import express from 'express';
const app = express();
app.use(express.urlencoded({extended: true}));

// sequelize
import connection from './config/sequelize-config.js';

// models
import Livro from './models/Livro.js';
import Intruso from './models/Intruso.js';
import Troca from './models/Troca.js';

// controllers
import LivrosController from './controllers/LivrosController.js';
import IntrusosController from './controllers/IntrusosController.js';
import TrocasController from './controllers/TrocasController.js';

// conexão e criação do banco de dados
connection.query('CREATE DATABASE IF NOT EXISTS libWanShiTong;').then(() => {
    console.log('Banco criado com sucesso');
}).catch(error => {
    console.log("O erro é", error);
});

connection.authenticate().then(() => {
    console.log('Conexão com o banco estabelecida com sucesso');
}).catch(error => {
    console.log("O erro é", error);
});

// rotas
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('index');
});

app.use('/', LivrosController);
app.use('/', IntrusosController);
app.use('/', TrocasController);

// server
const port = 8080;
app.listen(port, function(error){
    if(error){
        console.log(`Houve um erro ao iniciar o servidor: ${error}`);
    } else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
    }
});