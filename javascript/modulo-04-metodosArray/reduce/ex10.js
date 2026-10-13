let assinaturas = [
    { id: 1, plano: "Basic", mensalidade: 29.90, status: "Ativa" },
    { id: 2, plano: "Pro", mensalidade: 59.90, status: "Ativa" },
    { id: 3, plano: "Basic", mensalidade: 29.90, status: "Cancelada" },
    { id: 4, plano: "Enterprise", mensalidade: 149.90, status: "Ativa" },
    { id: 5, plano: "Pro", mensalidade: 59.90, status: "Cancelada" },
    { id: 6, plano: "Basic", mensalidade: 29.90, status: "Ativa" }
];

let resumoAssinaturas = assinaturas.reduce(function (acumulador, assinatura) {
    if (assinatura.status === "Ativa") {
        acumulador.quantidadeAtivas++;
        acumulador.receitaMensal += assinatura.mensalidade;
    }

    if (assinatura.status === "Cancelada") {
        acumulador.quantidadeCanceladas++;
    }

    return acumulador;
}, {
    quantidadeAtivas: 0,
    quantidadeCanceladas: 0,
    receitaMensal: 0
});

console.log("Resumo das assinaturas:", resumoAssinaturas);