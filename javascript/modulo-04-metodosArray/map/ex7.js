let funcionarios = [
    {
        nome: "Ana",
        cargo: "Desenvolvedora",
        setor: "TI",
        salario: 5000
    },
    {
        nome: "Carlos",
        cargo: "Analista",
        setor: "Financeiro",
        salario: 4200
    },
    {
        nome: "Mariana",
        cargo: "Gerente",
        setor: "RH",
        salario: 7000
    }
];

let dadosAtualizados = funcionarios.map((funcionario) => {
    return {
        nome: funcionario.nome,
        cargo: funcionario.cargo,
        setor: funcionario.setor
    }
})

console.log(dadosAtualizados)