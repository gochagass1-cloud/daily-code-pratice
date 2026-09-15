//Primeira venda acima da meta
let vendas = [100, 150, 100, 250, 300, 400]
let vendaAcima200 = 0

for (const venda of vendas) {
    if (venda > 200) {
        console.log(`Primeira venda acima da meta: ${venda}`);
        break
    }
}