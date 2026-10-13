let pagamentos = [
    { id: 801, valor: 450, status: "Aprovado" },
    { id: 802, valor: 120, status: "Pendente" },
    { id: 803, valor: 780, status: "Aprovado" },
    { id: 804, valor: 230, status: "Cancelado" },
    { id: 805, valor: 320, status: "Aprovado" }
];


const totalConciliado = pagamentos.reduce((acc, pagamento) => {
    if (pagamento.status === "Aprovado") {
        return acc + pagamento.valor
    }

    return acc 
}, 0)

console.log(`Total conciliado: R$${totalConciliado}`);