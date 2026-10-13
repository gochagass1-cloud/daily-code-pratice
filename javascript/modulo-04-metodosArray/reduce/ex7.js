let saldoInicial = 2500;

let movimentacoes = [
    { tipo: "credito", valor: 800 },
    { tipo: "debito", valor: 350 },
    { tipo: "debito", valor: 1200 },
    { tipo: "credito", valor: 450 },
    { tipo: "debito", valor: 275 }
];

let saldoFinal = movimentacoes.reduce(function (acumulador, movimentacao) {
    if (movimentacao.tipo === "credito") {
        return acumulador + movimentacao.valor;
    }

    if (movimentacao.tipo === "debito") {
        return acumulador - movimentacao.valor;
    }

    return acumulador;
}, saldoInicial);

console.log(`Saldo final: R$${saldoFinal}`);