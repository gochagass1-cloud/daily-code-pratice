//Soma do faturamento
let faturamento = [100, 250, 300, 150, 200];
let total = 0;

for (let i = 0; i < faturamento.length; i++) {
    total = total + faturamento[i];
}

console.log(`Faturamento total: R$ ${total}`);