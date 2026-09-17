//Classe Funcionario
class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome
        this.cargo = cargo
    }

    apresentar() {
        console.log(`
            Nome do funcionário: ${this.nome}
            Cargo do funcionario: ${this.cargo}
            `);
    }
}

//Instancia da classe
const funcionario = new Funcionario('Gabriel', 'Desenvolvedor Junior')
funcionario.apresentar()