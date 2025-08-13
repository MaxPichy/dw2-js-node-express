// Função anônima

// function (n1, n2){
//     return n1 + n2;
// }
const sum = function (n1, n2){
    return n1 + n2;
}

document.write(`<p> O resultado da soma é ${sum(8, 7)}. </p>`);

const type = typeof(sum);
document.write(`<p> O tipo da variável soma é ${type}. </p>`);



// Arrow function -> Função anônima
const double = x => { // quando a arrow function tiver apenas um parâmetro, não necessita de parêntesis
    return x * 2;
}

document.write(`<p> O dobro no número é ${double(900)}. </p>`);



// Arrow function com mais de um parâmetro
const calc = (num1, operator, num2) => {
    return eval(`${num1} ${operator} ${num2}`);
    // eval no JS é uma função nativa que realiza cálculos a partir de dous números e um operador
}

document.write(`<p> O resultado da operação é ${calc(1100, "-", 1)}. </p>`);



// Simplificando arrow function com um único retorno
const calculator = (num1, operator, num2) => eval(`${num1} ${operator} ${num2}`);

document.write(`<p> O resultado da operação é ${calculator(1100, "+", 1)}. </p>`);



// IIFE - Função imediata -> Immediately Invoked Function Expression
const iife = (function (){
    document.write(`<p> Estou sendo executada imediatamente! </p>`);
})();



// IIFE com parâmetro
const loadUser = (function (user){
    document.write(`
        <p> Carregando as informações do usuário: <strong> ${user} </strong>... </p>
    `);
})("Max");
