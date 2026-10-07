//Lista de funcionário
let produtos = [
    { codigo: "P001", nome: "Notebook", preco: 3500 },
    { codigo: "P002", nome: "Mouse", preco: 80 },
    { codigo: "P003", nome: "Teclado", preco: 150 }
];


//codigo procurado do produto.
let codigoProcurado = "P003";

//Consultando o codigo do produto com o codigo procurado
const consultarProduto = produtos.find((produto) => {
    return produto.codigo === codigoProcurado
})
console.log(consultarProduto);