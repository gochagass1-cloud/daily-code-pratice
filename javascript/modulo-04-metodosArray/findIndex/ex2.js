let produtos = [
    { codigo: "PROD-001", nome: "Notebook", estoque: 8 },
    { codigo: "PROD-002", nome: "Mouse", estoque: 25 },
    { codigo: "PROD-003", nome: "Teclado", estoque: 12 },
    { codigo: "PROD-004", nome: "Monitor", estoque: 5 }
];

//Código procurado recebido do sistema de estoque 
let codigoProcurado = "PROD-003"


//Encontrando o código do produto pelo indice.
const indiceProduto = produtos.findIndex((produto) => {
    return produto.codigo === codigoProcurado
})


//Verificando se o código do produto existe ou não.
if (indiceProduto !== -1) {
    console.log(`Porduto encontrado na posição: ${indiceProduto}`);
}
else {
    console.log('Produto não localizado.');
}

