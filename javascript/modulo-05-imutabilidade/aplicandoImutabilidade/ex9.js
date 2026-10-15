let filaAtendimento = [
    { id: 301, assunto: "Erro de login", prioridade: "Normal" },
    { id: 302, assunto: "Falha no relatório", prioridade: "Normal" },
    { id: 303, assunto: "Dúvida sobre cadastro", prioridade: "Baixa" }
];

let solicitacaoUrgente = {
    id: 304,
    assunto: "Sistema de pagamentos indisponível",
    prioridade: "Urgente"
};

let filaAtualizada = [
    solicitacaoUrgente,
    ...filaAtendimento
];

console.log("Fila original:", filaAtendimento);
console.log("Fila atualizada:", filaAtualizada);