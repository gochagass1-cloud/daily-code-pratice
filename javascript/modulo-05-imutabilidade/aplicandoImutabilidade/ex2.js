let historicoOperacoes = [
    { id: 1, usuario: "Ana", acao: "Login" },
    { id: 2, usuario: "Carlos", acao: "Consulta de relatório" },
    { id: 3, usuario: "Mariana", acao: "Atualização cadastral" }
];

let novaOperacao = {
    id: 4,
    usuario: "Lucas",
    acao: "Exportação de dados"
};


let historicoAtualizado = [...historicoOperacoes, novaOperacao]

console.log("Histórico antigo das operações:", historicoOperacoes);
console.log("Histórico atualziado das operações:", historicoAtualizado);