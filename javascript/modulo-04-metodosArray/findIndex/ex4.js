//Lista de produtos
let produtos = [
    { nome: "Notebook", estoque: 15, minimo: 10 },
    { nome: "Mouse", estoque: 12, minimo: 10 },
    { nome: "Teclado", estoque: 8, minimo: 8 },
    { nome: "Monitor", estoque: 4, minimo: 10 },
    { nome: "Headset", estoque: 2, minimo: 5 }
];


//Encontrando produto que está com estoque critico.
let produtoSituacaoCritica = produtos.findIndex((produto) => {
    return produto.estoque <= produto.minimo
})

console.log(produtoSituacaoCritica);