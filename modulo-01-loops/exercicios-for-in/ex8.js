//Relatorio de funcionario
let funcionarios = [
    {
        nome: 'Gabriel',
        cargo: 'Analista',
        setor: 'TI'
    },

    {
        nome: 'Miguel',
        cargo: 'Vendedor',
        setor: 'Comercial'
    },

    {
        nome: 'Gustavo',
        cargo: 'Desenvolvedor',
        setor: 'Desenvolvimento'
    }
]

for (let i in funcionarios) {
    console.log("Funcionário:", i);

    for (let propriedade in funcionarios[i]) {
        console.log(propriedade + ":", funcionarios[i][propriedade]);
    }

    console.log("----------------");
}