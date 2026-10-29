import {calculoTaxa} from "./taxas.js"

const transacoes = [
    { id: "TX-101", valor: 850, taxaPercentual: 2.5 },
    { id: "TX-102", valor: 2400, taxaPercentual: 1.8 },
    { id: "TX-103", valor: 120, taxaPercentual: 3 }
];



for (const transacao of transacoes) {
    const taxaFinal = calculoTaxa(
        transacao.valor,
        transacao.taxaPercentual
    )


    console.log(`ID: ${transacao.id} Valor: R$${transacao.valor} Taxa calculada: R$${taxaFinal.toFixed(2)}`);
}