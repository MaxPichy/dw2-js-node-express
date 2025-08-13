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

showMessage(); // Invocando a função:



// Função com parâmetros
const user = "Max";

function userMessage(user) { // Essa função recebe um PARÂMETRO
  

  document.write(`<h3> O que deseja fazer hoje, ${user}? </h3>`);
  // ${} -> Template Strings / Literal Strings
  // É usado para inserir variáveis dentro de strings -> (CRASE)
}

userMessage(user); // -> ARGUMENTO



// Função com mais de um parâmetro
const n1 = 10;
const n2 = 12;

function mult(){ // Essa funcão recebe dois parâmetros
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`);

}

mult(n1, n2);



// Função com retorno
const num1 = 1000;
const num2 = 5;

function div(num1, num2){
  return num1 / num2;
}

document.write(`<p> A divisão de ${num1} por ${num2} é igual a ${div(num1, num2)}. </p>`);



// Função com diferentes retornos
const number = 4;

function pairOdd(number){

  if(number % 2 ==0){
    return 'par';
  } else{
    return 'ímpar';
  }

}

document.write(`<p> O número ${number} é <strong> ${pairOdd(number)} </strong>. </p>`);















