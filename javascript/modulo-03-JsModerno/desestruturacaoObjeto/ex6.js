//Dados de uma transação
const transacao = {
    id: "TRX-774921",
    descricao: "Pagamento de fornecedor",
    valor: 4850.75,
    categoria: "Operacional",
    conta: "Conta empresarial",
    data: "2026-10-02",
    status: "Concluída"
};

//Desestruturando e pegando somente: {descricao, valor, categoria, data, status} do obj transacao
const {descricao, valor, categoria, data, status} = transacao


//Exibindo dados obtidos
console.log(`Descrição: ${descricao}`);
console.log(`Valor: ${valor}`);
console.log(`Categoria: ${categoria}`);
console.log(`Data: ${data}`);
console.log(`Status: ${status}`);
