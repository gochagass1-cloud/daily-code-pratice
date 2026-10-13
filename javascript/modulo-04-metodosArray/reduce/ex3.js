let setores = [
    { nome: "Suporte", atendimentos: 184, operacaoAtiva: true },
    { nome: "Infraestrutura", atendimentos: 96, operacaoAtiva: true },
    { nome: "Redes", atendimentos: 42, operacaoAtiva: false },
    { nome: "Sistemas", atendimentos: 215, operacaoAtiva: true },
    { nome: "Segurança", atendimentos: 63, operacaoAtiva: false }
];


const totalAtendimentos = setores.reduce((acc, atendimento) => {
    if (atendimento.operacaoAtiva === true) {
        return acc + atendimento.atendimentos
    }
    return acc
}, 0)

console.log(`Total de atendimentos ativos: ${totalAtendimentos}`);