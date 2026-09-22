//Criando classe Funcionario
class Funcionario {
    constructor(nome, setor) {
        this.nome = nome
        this.setor = setor
    }
}


//Criando classe Gerente que herda da classe Funcionario
class Gerente extends Funcionario{
    constructor(nome, setor, equipe) {
        super(nome, setor)
        this.equipe = equipe
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Setor: ${this.setor}`);
        console.log(`Quantidade de pessoas na equipe: ${this.equipe}`);
    }
}

//Criando gerente1
const gerente1 = new Gerente('Gabriel', 'TI', 19)
console.log(`==== GERENTE 1 ====`);
gerente1.exibirInfo()


//Criando gerente2
const gerente2 = new Gerente('Miguel', 'TI', 10)
console.log('==== GERENTE 2 ====');
gerente2.exibirInfo()