// 01.
class Heroi{
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr(nome){
        return `${nome} está correndo!`;
    }

    andar(nome){
        return `${nome} está andando...`;
    }

    atacar(nome){
        return `E ${nome} ataca!!`;
    }

    defender(nome){
        return `${nome} defende!!`;
    }

}

const homemAranha = new Heroi("Homem Aranha", 30, 4, 2);
homemAranha.teia = 1;
homemAranha.sentidoAranha = () => {
    return `Perigo detectado!`;
}

const superman = new Heroi("Superman", 50, 6, 6);
superman.podeVoar = 1;
superman.visaoCalor = () => {
    return `${superman.nome} está usando sua visão de calor!!`;
}

const batman = new Heroi("Batman", 20, 2, 2);
batman.esconder = 0;
batman.investigar = () => {
    return `${batman.nome} está investigando uma cena de crime...`;
}

// 02.
document.write(`
    <p>
        Nome: ${homemAranha.nome} <br>
        Vida: ${homemAranha.vida} <br>
        Velocidade: ${homemAranha.velocidade} <br>
        Força: ${homemAranha.forca} <br>
        Teia: ${homemAranha.teia} <br>
        ${homemAranha.correr(homemAranha.nome)} <br>
        ${homemAranha.andar(homemAranha.nome)} <br>
        ${homemAranha.atacar(homemAranha.nome)} <br>
        ${homemAranha.defender(homemAranha.nome)} <br>
        ${homemAranha.sentidoAranha()} <br>
    </p>
    <hr>
`);

document.write(`
    <p>
        Nome: ${superman.nome} <br>
        Vida: ${superman.vida} <br>
        Velocidade: ${superman.velocidade} <br>
        Força: ${superman.forca} <br>
        Voar: ${superman.teia} <br>
        ${superman.correr(superman.nome)} <br>
        ${superman.andar(superman.nome)} <br>
        ${superman.atacar(superman.nome)} <br>
        ${superman.defender(superman.nome)} <br>
        ${superman.visaoCalor()} <br>
    </p>
    <hr>
`);

document.write(`
    <p>
        Nome: ${batman.nome} <br>
        Vida: ${batman.vida} <br>
        Velocidade: ${batman.velocidade} <br>
        Força: ${batman.forca} <br>
        Esconder: ${batman.teia} <br>
        ${batman.correr(batman.nome)} <br>
        ${batman.andar(batman.nome)} <br>
        ${batman.atacar(batman.nome)} <br>
        ${batman.defender(batman.nome)} <br>
        ${batman.investigar()} <br>
    </p>
    <hr>
`);
