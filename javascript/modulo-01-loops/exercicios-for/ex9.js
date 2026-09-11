//Analise de vendas
let vendas = [120, 80, 250, 300, 90, 400, 150];

let total = 0;
let vendasAcimaDe200 = 0;
let maiorVenda = 0;

for (let i = 0; i < vendas.length; i++) {
    total = total + vendas[i];

    if (vendas[i] > 200) {
        vendasAcimaDe200++;
    }

    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
    }
}

console.log(`Total vendido: R$ ${total}`);
console.log(`Vendas superiores a R$ 200: ${vendasAcimaDe200}`);
console.log(`Maior venda: R$ ${maiorVenda}`);