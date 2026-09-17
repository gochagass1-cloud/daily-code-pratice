//Classe funcionario
class Funcionario {
    constructor(nome, cargo, setor) {
        this.nome = nome
        this.cargo = cargo
        this.setor = setor
    }

    promover(novoCargo) {
        this.cargo = novoCargo
        console.log(`Novo cargo: ${this.cargo}`);
    }
}

let funcionario = new Funcionario('Gabriel', 'Analista', 'TI')
console.log(`Cargo atual: ${funcionario.cargo}`);

funcionario.promover('Desenvolvedor')
