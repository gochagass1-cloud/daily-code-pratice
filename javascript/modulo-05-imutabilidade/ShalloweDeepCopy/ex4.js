let contrato = {
    numero: "CT-2026-90",
    valorMensal: 2400,
    cobranca: {
        multa: {
            percentual: 2,
            valorFixo: 50
        },
        descontos: [
            { tipo: "Fidelidade", percentual: 10 },
            { tipo: "Antecipacao", percentual: 5 }
        ]
    }
};

let reajuste = {
    valorMensal: 2750,
    cobranca: {
        multa: {
            percentual: 3
        }
    }
};


const simulacaoContrato = structuredClone(contrato)

simulacaoContrato.valorMensal = reajuste.valorMensal
simulacaoContrato.cobranca.multa.percentual = reajuste.cobranca.multa.percentual


console.log("Contrato original:", contrato);
console.log("Contrato pós reajuste:", simulacaoContrato);