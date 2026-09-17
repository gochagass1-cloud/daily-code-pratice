//Cadastro completo de funcionarios
class Funcionario {
    constructor(nome, idade, cargo, setor, salario) {
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
        this.setor = setor
        this.salario = salario
    }
}

const funcionario1 = new Funcionario('João', 24, 'Desenvolvedor', 'TI', 1950)
const funcionario2 = new Funcionario('Mariana', 29, 'Analista', 'Financeiro', 2100)
const funcionario3 = new Funcionario('Lucas', 35, 'Supervisor', 'Comercial', 5500)
const funcionario4 = new Funcionario('Ana Beatriz', 27, 'Analista de RH', 'RH', 3800)
const funcionario5 = new Funcionario('Rafael', 41, 'Gerente', 'Operações', 7200)

let funcionarios = [funcionario1, funcionario2, funcionario3, funcionario4, funcionario5]
let cadastrados = 0

for (const funcionario of funcionarios) {
    console.log(`
        Nome: ${funcionario.nome}
        Idade: ${funcionario.idade}
        Cargo: ${funcionario.cargo}
        Setor: ${funcionario.setor}
        Salario: ${funcionario.salario}
        `);

    cadastrados++
}

console.log(`Foram cadastrados ${cadastrados} funcionários`);
