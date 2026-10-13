let estoque = [
    { codigo: "P-101", quantidade: 12, custoUnitario: 35 },
    { codigo: "P-102", quantidade: 0, custoUnitario: 80 },
    { codigo: "P-103", quantidade: 7, custoUnitario: 120 },
    { codigo: "P-104", quantidade: 4, custoUnitario: 250 },
    { codigo: "P-105", quantidade: 0, custoUnitario: 45 }
];


const valorPatrimonial = estoque.reduce((acc, produto) => {
    let valorProduto = produto.quantidade * produto.custoUnitario

    return acc + valorProduto
}, 0)

console.log(`Valor patrimonial do estoque R$${valorPatrimonial}`);