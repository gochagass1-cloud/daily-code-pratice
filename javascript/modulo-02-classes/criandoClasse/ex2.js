//Cadastro de produto
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

}

const produto1 = new Produto('Notebook', 1500, 15)
const produto2 = new Produto('Celular', 1100, 5)
const produto3 = new Produto('Teclado', 200, 35)

console.log(produto1);
console.log(produto2);
console.log(produto3);
