//Lista de pagamento
let pagamentos = [
    {
        id: "PAY-001",
        cliente: "Ana",
        valor: 500,
        status: "Processado",
        contaAtiva: true,
        limiteDisponivel: 1000
    },
    {
        id: "PAY-002",
        cliente: "Carlos",
        valor: 0,
        status: "Pendente",
        contaAtiva: true,
        limiteDisponivel: 5000
    },
    {
        id: "PAY-003",
        cliente: "Mariana",
        valor: 1200,
        status: "Pendente",
        contaAtiva: false,
        limiteDisponivel: 5000
    },
    {
        id: "PAY-004",
        cliente: "Lucas",
        valor: 800,
        status: "Pendente",
        contaAtiva: true,
        limiteDisponivel: 500
    },
    {
        id: "PAY-005",
        cliente: "Pedro",
        valor: 1500,
        status: "Pendente",
        contaAtiva: true,
        limiteDisponivel: 3000
    }
];


//Recuperando o primeiro pagamento conforme os critérios fornecidos.
const pagamentoRecuperado = pagamentos.find((pagamento) => {
    return pagamento.status === "Pendente"
    && pagamento.valor > 0
    && pagamento.contaAtiva === true
    && pagamento.valor <= pagamento.limiteDisponivel
})


//Verificando se o pagamento existe ou não, caso exista, alterando o status para Processando e exibindo a lista atualizada de pagamentos.
if (pagamentoRecuperado) {
    pagamentoRecuperado.status = "Processando"

    console.log("Status pagamento atualizado:");
    console.log(pagamentoRecuperado);

    console.log("Lista de pagamento atualizada:");
    console.log(pagamentos);
}
else {
    console.log("Não foi possível recuperar nenhum pagamento.");
}
