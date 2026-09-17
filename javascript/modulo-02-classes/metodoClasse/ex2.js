//Classe produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    exibirProduto() {
        console.log(`
            Nome do produto: ${this.nome}
            Preco do produto: ${this.preco}
            `);
    }
}

//Instancia da classe
const produto1 = new Produto('Notebook', 1500)
const produto2 = new Produto('Celular', 2500)

produto1.exibirProduto()
produto2.exibirProduto()