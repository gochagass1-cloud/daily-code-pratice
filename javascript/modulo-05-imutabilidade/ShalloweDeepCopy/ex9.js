let operacaoSimples = {
    id: 701,
    status: "Pendente",
    tentativas: 0
};

let operacaoComplexa = {
    id: 702,
    status: "Pendente",
    auditoria: {
        responsavel: "Equipe A",
        registros: [
            { acao: "Criacao", concluida: true },
            { acao: "Validacao", concluida: false }
        ]
    }
};

let operacaoSimplesCopia = structuredClone(operacaoSimples)
operacaoSimplesCopia.tentativas = 4


let operacaoComplexaCopia = structuredClone(operacaoComplexa)
operacaoComplexaCopia.auditoria.responsavel = "Equipe B"
operacaoComplexaCopia.auditoria.registros[0].concluida = false



console.log('Operação simples base:', JSON.stringify(operacaoSimples, null, 2));
console.log('Operação simples independente:', JSON.stringify(operacaoSimplesCopia, null, 2));
console.log('Operação complexa base:', JSON.stringify(operacaoComplexa, null, 2));
console.log('Operação complexa independente:', JSON.stringify(operacaoComplexaCopia, null, 2));
