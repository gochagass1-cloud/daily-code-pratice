//Sistema de pedidos
class Pedido {
    constructor(numero, cliente, produto, quantidade) {
        this.numero = numero
        this.cliente = cliente
        this.produto = produto
        this.quantidade = quantidade
    }
}

const pedido1 = new Pedido(1, 'Gabriel', 'Teclado', 15)
const pedido2 = new Pedido(2, 'Miguel', 'Mouse', 25)
const pedido3 = new Pedido(3, 'Gustavo', 'Fone', 35)

console.log(pedido1);
console.log(pedido2);
console.log(pedido3);
