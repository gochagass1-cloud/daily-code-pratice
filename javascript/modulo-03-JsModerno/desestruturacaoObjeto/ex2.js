//Dados produto
const produto = {
    id: "PROD-884",
    nome: "Notebook Lenovo",
    categoria: "Eletrônicos",
    preco: 4599.90,
    estoque: 12
};

//Desestruturando e pegando somente {nome, categoria, preco} do obj produto
const {nome, categoria, preco} = produto


//Exibindo dados obtidos da desestruturação
console.log(`Nome: ${nome}`);
console.log(`Categoria: ${categoria}`);
console.log(`Preço: R$${preco}`);
