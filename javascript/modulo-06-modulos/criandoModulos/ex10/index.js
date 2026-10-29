
import {
    calcularTaxa,
    calcularValorFinal
} from "./transacoes.js";

const transacoes = [
    { id: "PG-01", valor: 1200, taxaPercentual: 2, desconto: 10 },
    { id: "PG-02", valor: 750, taxaPercentual: 1.5, desconto: 0 },
    { id: "PG-03", valor: 2300, taxaPercentual: 2.2, desconto: 25 }
];

for (const transacao of transacoes) {
    const taxa = calcularTaxa(
        transacao.valor,
        transacao.taxaPercentual
    );

    const valorFinal = calcularValorFinal(
        transacao.valor,
        taxa,
        transacao.desconto
    );

    console.log(`Transação: ${transacao.id}`);
    console.log(`Valor original: R$ ${transacao.valor.toFixed(2)}`);
    console.log(`Taxa: R$ ${taxa.toFixed(2)}`);
    console.log(`Desconto: R$ ${transacao.desconto.toFixed(2)}`);
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
    console.log("------------------------------");
}
