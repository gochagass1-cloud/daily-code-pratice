//Criando classe Funcionario
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

//Criando classe Desenvolvedor herdando da classe Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, cargo, linguagem) {
        super(nome,cargo)
        this.linguagem = linguagem
    }

    mostrarLinguagem() {
        console.log(`Linguagem dominante: ${this.linguagem}`);
    }
}

//Criando variaveis
const dev1 = new Desenvolvedor('Gabriel', 'Desenvolvedor Junior', 'JavaScript')
const dev2 = new Desenvolvedor('Miguel', 'CyberSecurity Junior', 'Python')

//Testando metodos dev1
dev1.apresentar()
dev1.mostrarLinguagem()
console.log('===============');

//Testando metodos dev2
dev2.apresentar()
dev2.mostrarLinguagem()