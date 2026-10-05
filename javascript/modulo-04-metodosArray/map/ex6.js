let produtos = [
    {
        nome: "Notebook",
        preco: 3500,
        estoque: 10
    },
    {
        nome: "Mouse",
        preco: 80,
        estoque: 25
    },
    {
        nome: "Teclado",
        preco: 150,
        estoque: 12
    }
];

let produtosAtualizado = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco
    }
})

console.log(produtosAtualizado);