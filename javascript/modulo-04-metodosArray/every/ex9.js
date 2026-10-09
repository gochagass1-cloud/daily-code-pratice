let transferencias = [
    { id: "TR-01", valor: 800, limite: 1000, contaAtiva: true, autorizada: true },
    { id: "TR-02", valor: 1200, limite: 1500, contaAtiva: true, autorizada: true },
    { id: "TR-03", valor: 700, limite: 500, contaAtiva: true, autorizada: true },
    { id: "TR-04", valor: 100, limite: 900, contaAtiva: false, autorizada: true },
    { id: "TR-05", valor: 0, limite: 500, contaAtiva: true, autorizada: true }
];

const solicitacaoValida = transferencias.every((transferencia) => {
    return transferencia.id !== ""
    && transferencia.valor > 0
    && transferencia.valor <= transferencia.limite
    && transferencia.contaAtiva === true
    && transferencia.autorizada === true
})

console.log(`Solicitação válida para ser processada: ${solicitacaoValida}`);

if (solicitacaoValida) {
    console.log("Solicitação válida: Todas as solicitações são válidas e podem ser encaminhadas ao processamento.");
} else {
    console.log("Soliticação inválida: Nem todas as solicitações são válidas e não podem ser encaminhadas ao processamento");
}