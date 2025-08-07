// ----- Variáveis podem ser declaradas de 3 formas:
// var, let e const
// var: no geral, evite o seu uso; pode não ser muito seguro.
// let: utilize quando for necessário reatribuir o valor da variável.
// const: utilize quando não precisar reatribuir o valor da variável.

// var nome = "Diego";
// var nome = "Maria";
// let cidade = "Registro";
// let cidade = "Pariquera"; -> NÃO PODE
// let endereco;
// endereco = "Rua Tal";
// const idade; -> NÃO PODE
// const idade = 18;
// idade = 20; -> NÃO PODE

// ----- Tipos de funções

// Função simples
const message = "<h2> Olá! Bem-vindo! Essa é sua primeira função! </h2>";

function showMessage() {
  document.write(message);
}

// Invocando a função:
showMessage();

// função com parâmetros
const user = "Max";

function userMessage(user) {
  // Essa função recebe um PARÂMETRO

  document.write(`<h3> O que deseja fazer hoje, ${user}? </h3>`);
  // ${} -> Template Strings / Literal Strings
  // É usado para inserir variáveis dentro de strings -> (CRASE)
}

userMessage(user); // -> ARGUMENTO
