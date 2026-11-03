const cobrancas = [
    { id: "CB-101", cliente: "Ana", valor: 850, status: "Pendente" },
    { id: "CB-102", cliente: "Bruno", valor: 1290, status: "Pendente" },
    { id: "CB-103", cliente: "Carla", valor: 475, status: "Pendente" }
];


function processarCobranca(cobranca, atraso) {
    setTimeout(() => {
        cobranca.status = "Processada";

        console.log(
            `Cobrança ${cobranca.id} | ` +
            `Cliente: ${cobranca.cliente} | ` +
            `Valor: R$ ${cobranca.valor.toFixed(2)} | ` +
            `Status: ${cobranca.status}`
        );
    }, atraso);
}

console.log("Iniciando processamento das cobranças...");

for (let i = 0; i < cobrancas.length; i++) {
    const atraso = (i + 1) * 2000;

    processarCobranca(cobrancas[i], atraso);
}
