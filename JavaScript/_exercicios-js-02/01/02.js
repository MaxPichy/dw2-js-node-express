// 01.
const listaClientes = [];

let arrayNome = [];
let arrayEndereco = [];
let arrayCpf = [];

let i;

for(i = 0; i < 3; i++){
	let promptNome = prompt(`Digite o nome do cliente ${i + 1}: `);
	let promptEndereco = prompt(`Digite o endereço do cliente ${i + 1}: `);
	let promptCpf = prompt(`Digite o CPF do cliente ${i + 1}: `);

	arrayNome[i] = promptNome;
	arrayEndereco[i] = promptEndereco;
	
	let verifyCpf = Number(promptCpf);
	if(isNaN(verifyCpf) == true){
		arrayCpf[i] = "CPF Inválido";
	} else{
		arrayCpf[i] = verifyCpf;
	}

	listaClientes.push({
			nome: arrayNome[i],
			endereco: arrayEndereco[i],
			cpf: arrayCpf[i]
	});

}


// 02.
listaClientes.forEach(cliente => {
	document.write(`<p>
		Cliente: ${cliente.nome} <br>
		Endereço: ${cliente.endereco} <br>
		CPF: ${cliente.cpf} <br>
		<hr>
	</p>`);
});


// 03.
document.write(`<h3> Inserindo um cliente manualmente ao final da lista </h3>`);

listaClientes.push({
	nome: "Isabela Webber",
	endereco: "Rua Lua Nova, 47, Jardim Verde, Tenebris - Outro Lado",
	cpf: 57412574369
});

listaClientes.forEach(cliente => {
	document.write(`<p>
		Cliente: ${cliente.nome} <br>
		Endereço: ${cliente.endereco} <br>
		CPF: ${cliente.cpf} <br>
		<hr>
	</p>`);
});


// 04.
document.write(`<h3> Inserindo um cliente manualmente no início da lista </h3>`);

listaClientes.unshift({
	nome: "Hayashi Jouki",
	endereco: "Avenida Eterna, 885, Jardim das Acácias, Roma - Itália",
	cpf: 57412574369
});

listaClientes.forEach(cliente => {
	document.write(`<p>
		Cliente: ${cliente.nome} <br>
		Endereço: ${cliente.endereco} <br>
		CPF: ${cliente.cpf} <br>
		<hr>
	</p>`);
});
