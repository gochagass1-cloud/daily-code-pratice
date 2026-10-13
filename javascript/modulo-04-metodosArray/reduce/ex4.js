let funcionarios = [
    { nome: "Ana", salario: 3200, adicional: 400, ativo: true },
    { nome: "Carlos", salario: 4100, adicional: 0, ativo: true },
    { nome: "Mariana", salario: 3800, adicional: 250, ativo: false },
    { nome: "Lucas", salario: 2900, adicional: 300, ativo: true }
];


const custoMensalEquipe = funcionarios.reduce((acc, funcionario) => {
    let salarioTotal = funcionario.salario + funcionario.adicional

    if (funcionario.ativo === true) {
        return acc + salarioTotal
    }
    
    return acc
},0)

console.log(`O custo mensal total da equipe é de: R$${custoMensalEquipe}`);