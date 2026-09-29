//Dados de entrega
const entrega = [
    "ENT-77421",
    "PED-58291",
    "Carlos Mendes",
    "São Paulo",
    "SP",
    "Em trânsito",
    "2026-09-30"
];


//Desestruturando os dados somente com as info necessárias para o painel de acompanhamento
const [, pedido, cliente, cidade, estado, situacao] = entrega

//Exibindo esses dados
console.log(`Pedido: ${pedido}`);
console.log(`Cliente: ${cliente}`);
console.log(`Cidade: ${cidade}`);
console.log(`Estado: ${estado}`);
console.log(`Status: ${situacao}`);

