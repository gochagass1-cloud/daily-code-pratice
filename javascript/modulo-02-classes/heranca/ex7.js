//Criando classe Produto
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    exibirProduto() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Estoque: ${this.estoque} unidades`);
    }

    adicionarEstoque(valor) {
        this.estoque += valor
    }
}

//Criando classe ProdutoEletronico herdando da classe Produto
class ProdutoEletronico extends Produto {
    constructor(nome, preco, estoque, marca) {
        super(nome, preco, estoque)
        this.marca = marca
    }
}

//Criando classe ProdutoAlimenticio herdando da classe Produto
class ProdutoAlimenticio extends Produto{
    constructor(nome, preco, estoque, validade) {
        super(nome, preco, estoque)
        this.validade = validade
    }
}


//Armazenando cada produto eletronico em seu array e percorrendo eles para exibi-los
let produtosEletronicos = [
    new ProdutoEletronico('Notebook', 4500, 100, 'Apple'),
    new ProdutoEletronico('Celular', 7500, 40, 'Apple'),
    new ProdutoEletronico('Monitor', 700, 10, 'Acer')
]
console.log('===== PRODUTOS ELETRÔNICOS =====');

for (const eletronico of produtosEletronicos) {
    eletronico.exibirProduto()
    console.log(`Marca: ${eletronico.marca}`);
    console.log('===================');
}

//atualizando estoque do produto Celular e exibindo o estoque atualizado
produtosEletronicos[1].adicionarEstoque(10)
console.log(`Estoque do produto: ${produtosEletronicos[1].nome} atualizado.
Estoque atual: ${produtosEletronicos[1].estoque}`);


//Armazenando cada produto alimenticio em seu array e percorrendo eles para exibi-los
let produtosAlimenticios = [
    new ProdutoAlimenticio('Arroz', 10, 340, '20/03/27'),
    new ProdutoAlimenticio('Café', 20, 130, '17/05/27'),
    new ProdutoAlimenticio('Leite', 5, 235, '19/06/27')
]
console.log('===== PRODUTOS ALIMENTICIOS =====');

for (const alimenticio of produtosAlimenticios) {
    alimenticio.exibirProduto()
    console.log(`Validade: ${alimenticio.validade}`);
    console.log('===================');
}

//atualizando estoque do produto Arroz e exibindo o estoque atualizado
produtosAlimenticios[0].adicionarEstoque(100)
console.log(`Estoque do produto: ${produtosAlimenticios[0].nome} atualizado.
Estoque atual: ${produtosAlimenticios[0].estoque}`);