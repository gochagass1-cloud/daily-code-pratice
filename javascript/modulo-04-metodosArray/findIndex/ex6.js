//Lista de chamados
let chamados = [
    {
        protocolo: "CH-001",
        prioridade: "Baixa",
        status: "Resolvido"
    },
    {
        protocolo: "CH-002",
        prioridade: "Alta",
        status: "Em análise"
    },
    {
        protocolo: "CH-003",
        prioridade: "Média",
        status: "Aberto"
    },
    {
        protocolo: "CH-004",
        prioridade: "Alta",
        status: "Aberto"
    }
];



//Localizando chamado que atende as duas condições para intervir.
let intervencaoChamado = chamados.findIndex((chamado) => {
    return chamado.prioridade === "Alta" && chamado.status !== "Resolvido"
})

if (intervencaoChamado) {
    console.log("Chamado que exige intervenção:");
    console.log(chamados[intervencaoChamado]);
    console.log(`Posição: ${intervencaoChamado}`);
}
else {
    console.log("Nenhum chamado exige intervenção imediata.");
}