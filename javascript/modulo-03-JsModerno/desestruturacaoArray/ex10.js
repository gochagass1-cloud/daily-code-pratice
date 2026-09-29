//dados do pedido
const pedido = [
    "PED-2026-8841",
    "Carlos Mendes",
    "Notebook Dell",
    "Eletrônicos",
    2,
    4899.90,
    "Pix",
    "Aprovado",
    "Em separação",
    "São Paulo"
];

//Desestruturando dados do pedido para montar um resumo operacional do pedido com info atualizadas
const [numPedido, cliente, produto, , qtd, , , statusPagamento, statusPedido, cidadeEntrega] = pedido

//Exibindo dados do resumo operacional
console.log(`==== RESUMO OPERACIONAL ====`);
console.log(`Pedido: ${numPedido}`);
console.log(`Cliente: ${cliente}`);
console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${qtd}`);
console.log(`Pagamento: ${statusPagamento}`);
console.log(`Status: ${statusPedido}`);
console.log(`Cidade: ${cidadeEntrega}`);
