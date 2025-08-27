// Métodos de manipulação de vetores
let vetor = ['Laranja', 'Maçã', 'Banana'];
document.write(`<p> Nosso vetor é o: ${vetor} </p>`);

vetor[3] = 'Morango';
document.write(`<p> Nosso vetor agora é o: ${vetor} </p>`);

// Push - Insere um novo elemento no final do vetor:
vetor.push('Abacaxi');
document.write(`<p> Nosso vetor agora é o: ${vetor} </p>`);

vetor[0] = 'Pêra';
document.write(`<p> Nosso vetor agora é o: ${vetor} </p>`);

// Unshift - Insere um novo elemento no início do vetor:
vetor.unshift('Laranja');
document.write(`<p> Nosso vetor agora é o: ${vetor} </p> <br>`);

// Lenght - Retorna o número de elementos no vetor
let numbers = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p> Nosso novo vetor agora é o: ${numbers} </p>`);
document.write(`<p> O número de elementos desse vetor é: ${numbers.length} </p>`);

// Sort - Ordena o vetor
document.write(`<p> O primeiro elemento de vetor é: ${numbers[0]} </p>`);

let numbersOrdened = numbers.sort();
document.write(`<p> O vetor ordenado é: ${numbersOrdened} </p> <br>`);

document.write(`<p> A lista de frutas ordenada é: ${vetor.sort()} </p>`);

// Ordenando um vetor numérico em ordem crescente:
document.write(`<p> ${numbers.sort((a, b) => a - b)} </p>`);

// Ordenando um vetor numérico em ordem decrescente:
document.write(`<p> ${numbers.sort((a, b) => b - a)} </p>`);
