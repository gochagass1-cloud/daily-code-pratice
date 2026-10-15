let produtos = [
    { codigo: "P-101", nome: "Teclado", quantidade: 18 },
    { codigo: "P-102", nome: "Mouse", quantidade: 32 },
    { codigo: "P-103", nome: "Monitor", quantidade: 7 },
    { codigo: "P-104", nome: "Headset", quantidade: 14 }
];

let correcaoEstoque = {
    codigo: "P-103",
    quantidadeConfirmada: 11
};

let produtosAtualizados = produtos.map(produto => {
    if (produto.codigo === correcaoEstoque.codigo) {
        return {
            ...produto,
            quantidade: correcaoEstoque.quantidadeConfirmada
        };
    }

    return produto;
})

console.log("Estoque antigo dos produtos:", produtos);
console.log("Estoque corrigido:", produtosAtualizados);