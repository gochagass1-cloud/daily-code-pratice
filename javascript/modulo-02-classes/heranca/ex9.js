//Criando classe Funcionario
class Funcionario {
    constructor(nome, cargo, setor, salario) {
        this.nome = nome
        this.cargo = cargo
        this.setor = setor
        this.salario = salario
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Setor: ${this.setor}`);
        console.log(`Salario: ${this.salario}`);
    }
}

//Criando classe Desenvolvedor herdando da classe Funcionario
class Desenvolvedor extends Funcionario{
    constructor(nome, cargo, setor, salario, linguagem) {
        super(nome, cargo, setor, salario)
        this.linguagem = linguagem
    }

    mostrarEspecialidade() {
        console.log(`Linguagem dominante: ${this.linguagem}`);
    }
}


//Criando classe Gerente herdando da classe Funcionario
class Gerente extends Funcionario {
    constructor(nome, cargo, setor, salario, qtdFuncionarios) {
        super(nome, cargo, setor, salario)
        this.qtdFuncionarios = qtdFuncionarios
    }

    mostrarEquipe() {
        console.log(`Equipe composta por ${this.qtdFuncionarios} funcionários`);
    }
}


//Criando classe Estagiario herdando da classe Funcionario
class Estagiario extends Funcionario {
    constructor(nome, cargo, setor, salario, instituicaoEnsino) {
        super(nome, cargo, setor, salario)
        this.instituicaoEnsino = instituicaoEnsino
    }

    mostrarInstituicao() {
        console.log(`Instituição de ensino: ${this.instituicaoEnsino}`);
    }
}


//Armazenando cada dev em seu array e percorrendo eles para exibir seus dados
let devs = [
    new Desenvolvedor('Gabriel', 'Desenvolvedor Junior', 'TI', 4500, 'JavaScript'),
    new Desenvolvedor('Miguel', 'Cybersecurity Junior', 'TI', 5500, 'Python')
]
console.log('===== DESENVOLVEDORES =====');

for (const dev of devs) {
    dev.mostrarDados()
    dev.mostrarEspecialidade()
    console.log('======================');
}


//Armazenando cada gerente em seu array e percorrendo eles para exibir seus dados
let gerentes = [
    new Gerente('Gustavo', 'Gerente Back-end', 'TI', 18000, 10),
    new Gerente('Manuela', 'Gerente Cybersecurity', 'TI', 23000, 7)
]
console.log('===== GERENTES =====');

for (const gerente of gerentes) {
    gerente.mostrarDados()
    gerente.mostrarEquipe()
    console.log('======================');
}

//Alterando o salario do gerente gustavo e exibindo o salario atualizado
gerentes[0].salario = 20000
console.log(`Salario do Gerente ${gerentes[0].nome} atualizado para: ${gerentes[0].salario}`);



//Armazenando cada estagiario em seu array e percorrendo eles para exibir seus dados
let estagiarios = [
    new Estagiario('José', 'Estagiario Back-end', 'TI', 1900, 'Leopoldo Santana'),
    new Estagiario('Igor', 'Estagiario Cybersecurity', 'TI', 2300, 'Bernadete')
]
console.log('===== ESTAGIARIOS =====');

for (const estagiario of estagiarios) {
    estagiario.mostrarDados()
    estagiario.mostrarInstituicao()
    console.log('======================');
}