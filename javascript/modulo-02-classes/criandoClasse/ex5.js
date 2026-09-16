//Funcionarios de setores diferentes
class Funcionario {
    constructor(nome, cargo, setor, salario) {
        this.nome = nome
        this.cargo = cargo
        this.setor = setor
        this.salario = salario
    }
}

const funcionario1 = new Funcionario('Gabriel', 'Analista', 'TI', 1550)
const funcionario2 = new Funcionario('Miguel', 'Desenvolvedor', 'TI', 2200)
const funcionario3 = new Funcionario('Manuela', 'Auxiliar', 'Administrativo', 2500)
const funcionario4 = new Funcionario('Gustavo', 'Desenvolvedor', 'TI', 3000)

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
console.log(funcionario4);
