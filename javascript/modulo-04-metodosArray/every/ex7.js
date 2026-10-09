let contratos = [
    { cliente: "Empresa A", status: "Ativo", pagamentoEmDia: true, diasRestantes: 12, renovacaoAutomatica: true },
    { cliente: "Empresa B", status: "Ativo", pagamentoEmDia: true, diasRestantes: 0, renovacaoAutomatica: true },
    { cliente: "Empresa C", status: "Ativo", pagamentoEmDia: false, diasRestantes: 20, renovacaoAutomatica: true },
    { cliente: "Empresa D", status: "Ativo", pagamentoEmDia: true, diasRestantes: 5, renovacaoAutomatica: false }
];


const contratoElegivel = contratos.every((contrato) => {
    return contrato.status === "Ativo"
    && contrato.pagamentoEmDia === true
    && contrato.renovacaoAutomatica === true
    && contrato.diasRestantes >= 1
})

console.log(`Renovação em lote autorizada: ${contratoElegivel}`);

if (contratoElegivel) {
    console.log('Renovação autorizada: Todos os contratos foram elegidos.');
} else {
    console.log('Renovação bloqueada: Nem todos os contratos são elegíveis.');
}

