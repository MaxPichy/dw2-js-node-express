import express from "express";
const router = express.Router();
// Importando o Model de Usuário
import User from "../models/User.js";
// Importando o bcrypt (usado para gerar hash de senha)
import bcrypt from "bcrypt";

// ROTA de LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA de CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// ROTA de CRIAÇÃO de Usuário
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;
  
  // Verificando se o usuário já está cadastrado no banco
  User.findOne({where: {email : email}}).then(user => {
    // Se o usuário não existir
    if(user == undefined){
      // Fará o cadastro
      
      // Gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt); 
  
      // Enviando para o banco
      User.create({
          email: email,
          password : hash
      }).then(() => {
          res.redirect("/login");
      }).catch(error => {
          console.log(error);
      });
    } else {

      // Se o usuário já existir
      res.send(`O usuário informado já está cadastrado! <br>
        <a href="/login">Tentar novamente.</a>`)
    }
  });
});

// Rota de autenticação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Busca o usuário no banco
  User.findOne({where: {email : email}}).then(user => {
    // Se o usuário existir
    if(user != undefined){
      // Valida senha
      const correct = bcrypt.compareSync(password, user.password);

      // Se a senha for válida
      if(correct){
        // Autoriza o login
        // Gerando a sessão para o usuário
        req.session.user = {
          id: user.id,
          email: user.email,
        }
        res.redirect("/");
        // res.send(`Usuário logado é: <br>
        //   ID: ${req.session.user['id']} <br>
        //   Email: ${req.session.user['email']}`);

        //Se a senha não for válida
      } else {
        res.send(`A senha digitada está incorreta! <br>
          <a href="/login">Tentar novamente.</a>`);
      }

      // Se o usuário não existir
    } else{
      res.send(`Usuário informado não existe! <br>
        <a href="/login">Tentar novamente.</a>`);
    }
  });
});

// Rota de logout
router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

export default router;

