//Lista de transações
let transacoes = [
    { id: "TRX-01", valor: 1200, status: "Conciliada", valorConferido: true },
    { id: "TRX-02", valor: 850, status: "Conciliada", valorConferido: true },
    { id: "TRX-03", valor: -50, status: "Conciliada", valorConferido: true },
    { id: "TRX-04", valor: 400, status: "Pendente", valorConferido: false }
];

//Validando se todas as transações atendem as regras definidas.
const transacaoValida = transacoes.every((transacao) => {
    return transacao.valor > 0
    && transacao.valorConferido === true
    && transacao.status === "Conciliada"
})

//Exibindo a decisão do lote.
console.log(`Lote conciliado: ${transacaoValida}`);


//Verificando se todo lote foi conciliado ou não.
if (transacaoValida) {
    console.log("Lote conciliado: Todas as transações respeitam as regras contábeis definidas.");
} else {
    console.log("Lote não conciliado: Nem todas as transações respeitam as regras contábeis definidas.");
}