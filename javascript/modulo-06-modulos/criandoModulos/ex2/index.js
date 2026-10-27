import {calcularPromocao} from "./precos.js"

const produtos = [
    { sku: "SKU-01", nome: "Teclado", preco: 250, desconto: 15 },
    { sku: "SKU-02", nome: "Monitor", preco: 1200, desconto: 10 },
    { sku: "SKU-03", nome: "Mouse", preco: 90, desconto: 0 }
];


for (const produto of produtos) {
    const resultFinal = calcularPromocao(
        produto.preco,
        produto.desconto
    )

    console.log(`Nome do produto: ${produto.nome} Preço: R$${resultFinal}`);
}