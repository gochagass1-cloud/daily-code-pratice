import {calcularCobranca} from "./calc.js"

const cobrancas = [
    { id: "CB-101", valor: 850, acrescimo: 35 },
    { id: "CB-102", valor: 1290, acrescimo: 0 },
    { id: "CB-103", valor: 475, acrescimo: 25 }
];


for (const cobranca of cobrancas) {
    const valorFinal = calcularCobranca(
        cobranca.valor,
        cobranca.acrescimo
    );

    console.log(
        `Cobrança ${cobranca.id}: R$ ${valorFinal}`
    );
}