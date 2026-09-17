//Classe Produto
class Produto {
    constructor(nome, estoque) {
        this.nome = nome
        this.estoque = estoque
    }

    adicionarEstoque(adicionar) {
        this.estoque = this.estoque + adicionar
        console.log(`Novo estoque: ${this.estoque}`);
    }
}

//Instancia da classe
let produto = new Produto('Notebook', 10)
produto.adicionarEstoque(5)