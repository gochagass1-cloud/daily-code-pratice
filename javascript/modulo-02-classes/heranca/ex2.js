//Criando class Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}


//Criando class ProdutoEletronico herdando da class Produto
class ProdutoEletronico extends Produto {
    constructor(nome, preco, marca) {
        super(nome, preco)
        this.marca = marca
    }

    exibirProduto() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Nome: ${this.marca}`);
    }
}

//Criando produto1
const produto1 = new ProdutoEletronico('Notebook', 3500, 'Apple')
console.log('==== PRODUTO 1 ====');
produto1.exibirProduto()

//Criando produto2
const produto2 = new ProdutoEletronico('Celular', 4500, 'Apple')
console.log('==== PRODUTO 2 ====');
produto2.exibirProduto()