class Heroi{
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr(){
        return `${Heroi.nome} está correndo!`;
    }

    andar(){
        return `${Heroi.nome} está andando...`;
    }

    atacar(){
        return `E ${Heroi.nome} ataca!!`;
    }

    defender(){
        return `${Heroi.nome} defende!!`;
    }

}

const HomemAranha = new Heroi("Homem Aranha", 30, 4, 2);
HomemAranha.teia = 1;
HomemAranha.sentidoAranha = () => {
    return `Perigo detectado!`;
}

const Superman = new Heroi("Superman", );
Superman.podeVoar = 1;
Superman.visaoCalor = () => {
    return `${Heroi.nome} está usando sua visão de calor!!`;
}

const Batman = new Heroi("Batman");
Batman.esconder = 0;
Batman.investigar = () => {
    return `${Heroi.nome} está investigando uma cena de crime...`;
}