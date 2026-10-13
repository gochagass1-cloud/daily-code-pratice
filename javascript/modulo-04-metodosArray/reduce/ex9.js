let produtos = [
    { codigo: "KB-01", nome: "Teclado", preco: 150 },
    { codigo: "MS-02", nome: "Mouse", preco: 80 },
    { codigo: "MN-03", nome: "Monitor", preco: 950 },
    { codigo: "HB-04", nome: "Hub USB", preco: 120 }
];

let precosPorCodigo = produtos.reduce(function (acumulador, produto) {
    acumulador[produto.codigo] = produto.preco;

    return acumulador;
}, {});

console.log(precosPorCodigo);
console.log(`Preço do monitor: R$${precosPorCodigo["MN-03"]}`);