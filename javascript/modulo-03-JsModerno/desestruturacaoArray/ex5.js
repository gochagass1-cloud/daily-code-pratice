//relatório movimentação
const movimentacao = [
    "MOV-8842",
    "Pagamento fornecedor",
    2750.50,
    "Financeiro",
    "2026-09-28"
];

//Desestruturando o relatório e gerando somente as info necessárias atualizadas
const [, descricao, valor, , data] = movimentacao

//Exibindo os dados do relatório atualizado
console.log(`Descrição: ${descricao}`);
console.log(`Valor: R$${valor}`);
console.log(`Data: ${data}`);