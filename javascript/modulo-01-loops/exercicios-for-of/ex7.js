//Análise de estoque
let estoques = [5, 0, 12, 3, 0, 8]
let produtosSemEstoque = 0

for (const  estoque of estoques) {
    console.log(`Quantidade no estoque: ${estoque}`);

    if (estoque === 0) {
        console.log(`O produto correspondente tem ${estoque} de estoque`);
        produtosSemEstoque++
    }
}

console.log(`${produtosSemEstoque} produtos foram encontrados sem estoque.`);