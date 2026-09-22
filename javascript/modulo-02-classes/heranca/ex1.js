//Criando class funcionario
class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome
        this.cargo = cargo
    }

    apresentar() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
    }
}


//Criando class Desenvolvedor herdando da class Funcionario
class Desenvolvedor extends Funcionario {
    
}

//Criando desenvolvedor
const dev1 = new Desenvolvedor('Gabriel', 'Desenvolvedor Back-end')
dev1.apresentar()