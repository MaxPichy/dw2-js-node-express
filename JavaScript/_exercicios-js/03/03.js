document.write(`
    
    <h1> Desenvolvimento Web II </h1>
    <h3> Aula - JavaScript </h3>
    <hr>
    <h4> Exercicio 03 </h4>
    
`);

const num = prompt(`Digite um número: `);

const calcularDobro = function (num){
    return num * 2;
}

document.write(`<p> O dobro de ${num} é ${calcularDobro(num)}. </p>`);