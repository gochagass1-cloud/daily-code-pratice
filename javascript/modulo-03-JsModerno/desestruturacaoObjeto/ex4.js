//Dados pedido
const pedido = {
    numero: "PED-2026-481",
    cliente: "Ana Oliveira",
    produto: "Monitor 27",
    quantidade: 2,
    valorTotal: 1899.90,
    status: "Em separação"
};


//Desestruturando e pegando {numero, produto, quantidade, status} do obj pedido
const {numero, produto, quantidade, status} = pedido


//Exibindo dados obtidos
console.log(`Número: ${numero}`);
console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Status: ${status}`);
