//Criando classe Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}


//Criando classe Carro que herda da classe Veiculo 
class Carro extends Veiculo{
    constructor(marca, modelo, ano, qtdPortas) {
        super(marca, modelo, ano)
        this.qtdPortas = qtdPortas
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Quantidade de Portas: ${this.qtdPortas}`);
    }
}


//Criando variavel carro1
const carro1 = new Carro('Ferrari', 'Enzo', 2002, 2)
console.log('==== CARRO 1 ====');
carro1.exibirInfo()


//Criando variavel carro2
const carro2 = new Carro('Ferrari', 'LaFerrari', 2023, 2)
console.log('==== CARRO 2 ====');
carro2.exibirInfo()