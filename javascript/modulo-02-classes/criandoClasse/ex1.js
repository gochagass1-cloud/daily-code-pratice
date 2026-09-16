//Cadastro de funcionario
class Funcionario {
    constructor(nome, cargo, setor) {
        this.nome = nome
        this.cargo = cargo
        this.setor = setor
    }
}

const funcionario1 = new Funcionario('Gabriel', 'Analista', 'TI')
const funcionario2 = new Funcionario('Miguel', 'Desenvolvedor J', 'TI')

console.log(funcionario1);
console.log(funcionario2);
