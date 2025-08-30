document.write(`
    
    <h1> Desenvolvimento Web II </h1>
    <h3> Aula - JavaScript </h3>
    <hr>
    <h4> Exercicio 04 </h4>
    
`);

const num = prompt(`Digite um número: `);

const calcularMetade = num => {
    return num / 2;
}

document.write(`<p> A metade de ${num} é ${calcularMetade(num)}. </p>`);