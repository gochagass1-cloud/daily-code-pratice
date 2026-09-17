//Produtos do estoque
class Produto {
    constructor(codigo, nome, categoria, estoque) {
        this.codigo = codigo
        this.nome = nome
        this.categoria = categoria
        this.estoque = estoque
    }
}

const produto1 = new Produto('1a1a', 'Notebook', 'Eletrônicos', 102)
const produto2 = new Produto('2a2b', 'Celular', 'Eletrônicos', 52)
const produto3 = new Produto('3a3c', 'Teclado', 'Eletrônicos', 89)
const produto4 = new Produto('4a4d', 'Mouse', 'Eletrônicos', 200)
const produto5 = new Produto('5a5e', 'Fone', 'Eletrônicos', 122)

let estoque = [produto1, produto2, produto3, produto4, produto5]
console.log(estoque);
