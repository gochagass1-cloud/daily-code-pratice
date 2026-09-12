//Soma de vendas
let vendas = [120, 250, 80, 300, 150]
let total = 0

for (const venda of vendas) {
    console.log(`Venda no valor de R$${venda}`);

    total += venda
}

console.log(`Valor total das vendas R$${total}`);