document.write(`
    
    <h1> Desenvolvimento Web II </h1>
    <h3> Aula - JavaScript </h3>
    <hr>
    <h4> Exercicio 01 </h4>
    
`);

const name = prompt(`Digite o seu nome: `);

function saudacaoPersonalizada(name){
    document.write(`<p> Olá, ${name}! Bem-vindo(a) à Calculadora Universal! </p>`);
}

saudacaoPersonalizada(name);