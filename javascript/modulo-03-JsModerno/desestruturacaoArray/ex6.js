//Dados pedido
const pedido = [
    "PED-58291",
    "Mariana Costa",
    "Notebook Lenovo",
    2,
    4599.90,
    "Em separação",
    "Cartão"
];

//Desestruturando os dados do pedido para equipe de logística
const [, cliente, produto, qtd, , situacao] = pedido

//Exibindo os dados
console.log(`Cliente: ${cliente}`);
console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${qtd}`);
console.log(`Status: ${situacao}`);
