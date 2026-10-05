//Lista de chamados
let chamados = [
    { protocolo: "CH-001", cliente: "Ana", prioridade: "Alta", status: "Aberto" },
    { protocolo: "CH-002", cliente: "Carlos", prioridade: "Baixa", status: "Resolvido" },
    { protocolo: "CH-003", cliente: "Mariana", prioridade: "Alta", status: "Aberto" },
    { protocolo: "CH-004", cliente: "Lucas", prioridade: "Média", status: "Em análise" }
];

//Filtrando chamados que ainda precisam de atendimento. Aberto e Em análise
const chamadosEmAtendimento = chamados.filter((chamado) => chamado.status === "Aberto" || chamado.status === "Em análise" )
console.log(chamadosEmAtendimento);