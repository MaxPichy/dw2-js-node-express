// Importando o Express (framework)
const express = require("express");

// Iniciando o Express na variável app
const app = express();

// CONFIGURANDO O EJS
app.set(`view engine`, `ejs`);

// Files to public paste
app.use(express.static(`public`));

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ -> trata a requisição     RES -> trata a resposta
app.get(`/`, (req, res) => {
    res.render(`index`);
});

// ROTA DE PRODUTOS
app.get(`/produtos`, (req, res) => {
    // const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']

    // Array de objetos com os produtos
    const produtos = [
        {nome: 'Celular', preco: 3000},
        {nome: 'Computador', preco: 4000},
        {nome: 'Tablet', preco: 2000},
        {nome: 'Notebook', preco: 3800}
    ];

    res.render(`produtos`, {
        produtos : produtos
    });
});

// ROTA DE CLIENTES
app.get(`/clientes`, (req, res) => {

    const clientes = [
        {nome: 'Ricardo', cpf:'123.456.789-00', endereco: 'Rua das Flores, 34'},
        {nome: 'Isaac', cpf: '123.456.789-00', endereco: 'Rua Diamante, 100'},
        {nome: 'Ana', cpf: '123.456.789-00', endereco: 'Rua Ceará, 30'},
        {nome: 'Renan', cpf: '123.456.789-00', endereco: 'Rua Curitiba, 22'},
    ];

    res.render(`clientes`, {
        clientes : clientes
    });
});

app.get(`/pedidos`, (req, res) => {

    const pedidos = [
        {numero: 1, produto: 'Computador', valor: 4000},
        {numero: 2, produto: 'Tablet', valor: 2000},
        {numero: 3, produto: 'Computador', valor: 4000},
        {numero: 4, produto: 'Celular', valor: 3000}
    ];

    res.render(`pedidos`, {
        pedidos : pedidos
    });

});

// ROTA DE PERFIL
// :user -> É um parâmetro da rota (OBRIGATÓRIO)
// :user? -> É um parâmetro da rota (OPCIONAL)
app.get(`/perfil/:user`, (req,res) =>{
    // Criando a variável que será enviada para a página
    const user = req.params.user;
    res.render(`perfil`, {
        // Enviando variáveis para a página EJS
        user : user
    });
});

// Iniciando o Servidor HTTP
// O servidor escutará na porta 8080
const port = 8080; 

app.listen(port, error => {
    if(error){
        console.log(`Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`);
    } else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});