//Lista de chamados
let chamados = [
    { protocolo: "CH-001", prioridade: "Baixa", status: "Aberto" },
    { protocolo: "CH-002", prioridade: "Alta", status: "Resolvido" },
    { protocolo: "CH-003", prioridade: "Alta", status: "Em análise" },
    { protocolo: "CH-004", prioridade: "Alta", status: "Aberto" }
];


//Encontrando chamado conforme os critérios fornecidos e exibindo ele.
const chamadoProcurado = chamados.find((chamado) => {
    return chamado.prioridade === "Alta" && chamado.status !== "Resolvido"
})
console.log('Chamado encontrado:');
console.log(chamadoProcurado);