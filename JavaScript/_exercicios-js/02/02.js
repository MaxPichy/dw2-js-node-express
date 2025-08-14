document.write(`
    
    <h1> Desenvolvimento Web II </h1>
    <h3> Aula - JavaScript </h3>
    <hr>
    <h4> Exercicio 02 </h4>
    
`);

const operador = prompt(`Digite o operador que deseja utilizar: `);
const num1 = prompt(`Digite o valor do primeiro número: `);
const num2 = prompt(`Digite o valor do segundo número: `);

function operacaoMatematica(num1, operador, num2){
    const calcular = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);
    document.write(`
        <p> O resultado de ${num1} ${operador} ${num2} é igual a ${calcular(num1, operador, num2)}. </p>
    `);
}

operacaoMatematica(num1, operador, num2);