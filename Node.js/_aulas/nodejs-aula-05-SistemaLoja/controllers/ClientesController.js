import express from "express";
const router = express.Router();

// Importando o model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then(clientes => {
    res.render("clientes", {
      clientes: clientes
    });
  }).catch(error => {
    console.log(error);
  });
});

// ROTA CADASTRO DE CLIENTE
router.post("/clientes/new", (req, res) => {
  // Coletando os dados do formulário
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

// ROTA EXCLUSÃO DE CLIENTE
// :id é um parâmetro obrigatório
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;

  // .destroy() exclui um registro do banco
  Cliente.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

// ROTA DE EDIÇÃO DE CLIENTE
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;

  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente: cliente
    });
  }).catch(error => {
    console.log(error);
  });
});

export default router;
