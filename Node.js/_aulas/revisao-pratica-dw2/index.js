import express from 'express';
import connection from "./config/sequelize-config.js";
import FilmesController from "./controllers/FilmesController.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({exrended: false}));

app.use("/", FilmesController);

connection.authenticate().then( () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch(error => {
    console.log(error);
});

connection.query("CREATE DATABASE IF NOT EXISTS filmes;").then(() => {
    console.log("O banco de dados está criado");
}).catch( error => {
    console.log(error);
});

const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    } else{
        console.log(`Servidor iniciado em http://localhost:${8080}`);
    }
});