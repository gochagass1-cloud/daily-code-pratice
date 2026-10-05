//Lista de produtos
let produtos = [
    { codigo: "PROD-001", nome: "Notebook", estoque: 15, estoqueMinimo: 10 },
    { codigo: "PROD-002", nome: "Mouse", estoque: 3, estoqueMinimo: 10 },
    { codigo: "PROD-003", nome: "Teclado", estoque: 8, estoqueMinimo: 8 },
    { codigo: "PROD-004", nome: "Monitor", estoque: 20, estoqueMinimo: 10 }
];


//Filtrando produtos que precisam de reposição abaixo do estoque mínimo
let reposicao = produtos.filter((produto) => {
    return produto.estoque < produto.estoqueMinimo
})

console.log(reposicao);