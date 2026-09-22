//Criando class
class Produto {
    

    static calcularDesconto(preco, desconto) {
        let valorDesconto = preco * (desconto / 100)
        let precoFinal = preco - valorDesconto

        console.log(`Preço original: R$${preco}`);
        console.log(`Desconto: ${desconto}%`);
        console.log(`Preço final: R$${precoFinal}`);
    }
}

Produto.calcularDesconto(100, 10)
Produto.calcularDesconto(250, 25)