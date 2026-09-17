//Classe pedido
class Pedido {
    constructor(numero, cliente, status) {
        this.numero = numero
        this.cliente = cliente
        this.status = status
    }

    mostrarPedido() {
        console.log(`
            Numero do pedido: ${this.numero}
            Cliente: ${this.cliente}
            Status do pedido: ${this.status}
            `);
    }
}

//Instancia da classe
let pedido1 = new Pedido('1001', 'Gabriel', 'Enviado')
let pedido2 = new Pedido('1002', 'Miguel', 'Entregue')
let pedido3 = new Pedido('1003', 'Gustavo', 'A caminho')

pedido1.mostrarPedido()
pedido2.mostrarPedido()
pedido3.mostrarPedido()