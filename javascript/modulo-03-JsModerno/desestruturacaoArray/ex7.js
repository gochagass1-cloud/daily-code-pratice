//linha de dados para dashboard
const venda = [
    "VEN-2026-091",
    "Notebook",
    "Eletrônicos",
    4,
    3599.90,
    "Pix",
    "Aprovada",
    "2026-09-28"
];

//Desestruturando o componente de venda para o dashboard somente com os dados necessários
const [, produto, , qtdVendida, valor, , estado] = venda


//Exibindo os dados
console.log(`Produto: ${produto}`);
console.log(`Quantidade Vendida: ${qtdVendida}`);
console.log(`Valor: R$${valor}`);
console.log(`Status: ${estado}`);
