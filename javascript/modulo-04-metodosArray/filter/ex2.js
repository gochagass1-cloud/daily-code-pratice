//Lista de produtos
let produtos = [
    { nome: "Notebook", estoque: 10 },
    { nome: "Mouse", estoque: 0 },
    { nome: "Teclado", estoque: 15 },
    { nome: "Monitor", estoque: 0 }
];

//Filtrando produtos disponíveis para vendas, com estoque maior que 0;
let disponiveis = produtos.filter((produto) => produto.estoque > 0)
console.log(disponiveis);