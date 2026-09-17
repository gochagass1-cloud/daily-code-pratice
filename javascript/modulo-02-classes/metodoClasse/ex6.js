//Classe Pedido
class Pedido {
    constructor(numero, cliente, status) {
        this.numero = numero
        this.cliente = cliente
        this.status = status
    }

    processarPedido() {
        this.status = 'Processado'
        console.log(`Novo status do pedido: ${this.status}`);
    }
}

let pedido = new Pedido('PED-001', 'Gabriel', 'Pendente')
console.log(`Status do pedido: ${pedido.status}`);

pedido.processarPedido()
