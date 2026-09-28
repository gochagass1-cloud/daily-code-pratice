
const movimentacao = [
    "MOV-8842",
    "Pagamento fornecedor",
    2750.50,
    "Financeiro",
    "2026-09-28"
];

const [, descricao, valor, , data] = movimentacao

console.log(`Descrição: ${descricao}`);
console.log(`Valor: R$${valor}`);
console.log(`Data: ${data}`);