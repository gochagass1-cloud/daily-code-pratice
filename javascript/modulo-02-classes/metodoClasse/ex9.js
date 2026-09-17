//Classe pedido
class Pedido {
    constructor(numero, cliente, produto, quantidade, valor, status) {
        this.numero = numero 
        this.cliente = cliente
        this.produto = produto
        this.quantidade = quantidade
        this.valor = valor
        this.status = status
    }

    processarPedido() {
        this.status = 'Processado'
    }

    cancelarPedido() {
        this.status = 'Cancelado'
    }

    mostrarPedido() {
        console.log(`
            Numero do pedido: ${this.numero}
            Cliente: ${this.cliente}
            Produto: ${this.produto}
            Quantidade: ${this.quantidade}
            Valor R$${this.valor}
            Status: ${this.status}
            `);
    }
}

//Instancia e teste pedido1
let pedido1 = new Pedido('PED-001', 'Gabriel', 'Celular', 2, 5000, 'Pendente')
pedido1.mostrarPedido()
pedido1.processarPedido()
pedido1.mostrarPedido()


//Instancia e teste pedido2
let pedido2 = new Pedido('PED-002', 'Miguel', 'Monitor', 4, 2800, 'Enviado')
pedido2.mostrarPedido()
pedido2.cancelarPedido()
pedido2.mostrarPedido()
