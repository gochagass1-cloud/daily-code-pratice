//Classe Produto
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    adicionarEstoque(adicionar) {
        this.estoque = this.estoque + adicionar
        console.log(`Adicionado ${adicionar} ao estoque`);
    }

    removerEstoque(remover) {
        this.estoque = this.estoque - remover
        console.log(`Removido ${remover} do estoque`);
    }
}

let produto = new Produto('Celular', 1500, 20)
produto.adicionarEstoque(10)
produto.removerEstoque(5)

console.log(`Estoque atual: ${produto.estoque}`);