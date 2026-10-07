let transacoes = [
    {
        id: "TRX-001",
        valor: 500,
        status: "Processada",
        contaAtiva: true
    },
    {
        id: "TRX-002",
        valor: 0,
        status: "Pendente",
        contaAtiva: true
    },
    {
        id: "TRX-003",
        valor: 1500,
        status: "Pendente",
        contaAtiva: false
    },
    {
        id: "TRX-004",
        valor: 800,
        status: "Pendente",
        contaAtiva: true
    },
    {
        id: "TRX-005",
        valor: 1200,
        status: "Pendente",
        contaAtiva: true
    }
];

//Encontrando a posição da transação conforme as condições.
let indiceTransacoes = transacoes.findIndex((transacao) => {
    return transacao.status === "Pendente"
    && transacao.valor > 0
    && transacao.contaAtiva === true
})

//Verificando se alguma transação foi encontrada
if (indiceTransacoes !== -1) {
//Atualizando o status dessa transação para processada
    transacoes[indiceTransacoes].status = "Processada";

//Exibindo a transação processada
    console.log("Transação processada:");
    console.log(transacoes[indiceTransacoes]);

//Exibindo o array final de transações.
    console.log("Array atualizado:");
    console.log(transacoes);
}
//Verificando caso nenhuma transação for encontrada.
else {
    console.log('Nenhuma transação encontrada.');
}