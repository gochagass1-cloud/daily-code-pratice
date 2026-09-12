//Análise de vendas
let vendas = [150, 320, 90, 450, 200, 600, 120]

let total = 0
let vendaMaior200 = 0
let maiorVenda = 0

for (const venda of vendas) {
    total += venda

    if (venda > 200) {
        vendaMaior200++
    }

    if (venda > maiorVenda) {
        maiorVenda = venda
    }

}

console.log(`Total vendido: R$ ${total}`);
console.log(`Vendas superiores a R$200: ${vendaMaior200}`);
console.log(`Maior venda: R$ ${maiorVenda}`);