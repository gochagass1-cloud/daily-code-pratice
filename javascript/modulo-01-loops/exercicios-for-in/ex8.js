//Relatorio de funcionario
let funcionarios = [
    {
        nome: "Carlos",
        cargo: "Desenvolvedor",
        setor: "TI"
    },
    {
        nome: "Mariana",
        cargo: "Analista",
        setor: "Financeiro"
    },
    {
        nome: "Lucas",
        cargo: "Suporte",
        setor: "TI"
    }
];

for (let indice in funcionarios) {
    console.log(`--- Funcionário ${Number(indice) + 1} ---`);

    for (let propriedade in funcionarios[indice]) {
        console.log(`${propriedade}: ${funcionarios[indice][propriedade]}`);
    }
}