//Lista de operações.
let operacoes = [
    {
        id: "OP-001",
        tipo: "Pagamento",
        valor: 500,
        status: "Processada",
        usuarioAtivo: true
    },
    {
        id: "OP-002",
        tipo: "Pagamento",
        valor: 0,
        status: "Pendente",
        usuarioAtivo: true
    },
    {
        id: "OP-003",
        tipo: "Pagamento",
        valor: 1200,
        status: "Pendente",
        usuarioAtivo: false
    },
    {
        id: "OP-004",
        tipo: "Pagamento",
        valor: 800,
        status: "Pendente",
        usuarioAtivo: true
    },
    {
        id: "OP-005",
        tipo: "Pagamento",
        valor: 1500,
        status: "Pendente",
        usuarioAtivo: true
    }
];


//Recuperando a primeira operação com os critérios fornecidos.
const operacaoRecuperada = operacoes.find((operacao) => {
    return operacao.status === "Pendente"
    && operacao.valor > 0
    && operacao.usuarioAtivo === true
})

//Verificando se a operação existe ou não e alterando o status dela para Processando.
if (operacaoRecuperada) {
    operacaoRecuperada.status = "Processando"

    console.log("Operação Recuperada e status atualizado:");
    console.log(`ID: ${operacaoRecuperada.id}`);
    console.log(`Tipo: ${operacaoRecuperada.tipo}`);
    console.log(`Valor: ${operacaoRecuperada.valor}`);
    console.log(`Status: ${operacaoRecuperada.status}`);
    console.log(`Usuário ativo: ${operacaoRecuperada.usuarioAtivo}`);
}
else { 
    console.log("Nenhuma operação foi recuperada.");
}