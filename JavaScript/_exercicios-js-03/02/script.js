// 01
const data = new Date();
document.write(`<p> Exibindo a data atual completa: </p>`);
document.write(`<p> ${data} </p> <hr>`);

//02
let promptValor = prompt(`Digite o valor da sua compra: `);
let verificarValor = Number(promptValor);

if(isNaN(verificarValor) == true){
    document.write(`Valor Inválido!`);
} else{
    const compraInternacional = verificarValor;
}

const compraInternacionalDolar = compraInternacional.toLocaleString("en", {
    style: "currency",
    currency: "USD"
});

