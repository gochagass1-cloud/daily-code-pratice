//Análise de vendas
let vendas = [120, 80, 250, 300, 90, 400, 150]

let total = 0
let quantidadeAcimaDe200 = 0
let maiorVenda = 0 

for (let i = 0; i < vendas.length; i++) {
    total += vendas[i]

    if (vendas[i] > 200) {
        quantidadeAcimaDe200++
    }

    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i]
    }
}

console.log(`Total vendido: ${total}`);
console.log(`Vendas acima de 200: ${quantidadeAcimaDe200}`);
console.log(`Maior venda: ${maiorVenda}`);
