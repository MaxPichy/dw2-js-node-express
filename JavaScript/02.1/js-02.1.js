// Arrays(vetores): Servem para armazenar uma lista, ou seja, diferentes elementos em única variável.

const products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p> ${products} </p>`);
document.write(`<p> ${typeof(products)} </p>`);
document.write(`<p> Exibindo um elemento do array através do índice: </p>`);
document.write(`<p> ${products[1]} </p>`);

// forEach
document.write(`<p> Percorrendo um array através do forEach: </p>`);
products.forEach(products => {
    document.write(`<p> ${products} </p>`);
});

document.write(`<p> Mostrando os índices e valores com forEach: </p>`);
products.forEach((products, i) => {
    document.write(`<p> ${i + 1} - ${products} </p>`);
});