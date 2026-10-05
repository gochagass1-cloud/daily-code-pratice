let produtos = [
    {
        codigo: "PROD-001",
        nome: "Notebook",
        categoria: "Eletrônicos",
        preco: 3500,
        estoque: 12
    },
    {
        codigo: "PROD-002",
        nome: "Mouse",
        categoria: "Periféricos",
        preco: 80,
        estoque: 30
    },
    {
        codigo: "PROD-003",
        nome: "Teclado",
        categoria: "Periféricos",
        preco: 150,
        estoque: 18
    }
];

let catalogo = produtos.map((produto) => {
    return {
        codigo: produto.codigo,
        nome: produto.nome,
        categoria: produto.categoria,
        precoFormatado: `R$${produto.preco}`
    }
})

console.log(catalogo);