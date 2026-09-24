
class Pedido {
    constructor(numero, cliente, status) {
        this.numero = numero
        this.cliente = cliente
        this.status = status
    }

    mostrarPedido() {
        console.log(`Numero: ${this.numero}`);
        console.log(`Cliente: ${this.cliente}`);
        console.log(`Status: ${this.status}`);
    }

    processarPedido() {
        this.status = 'Processado'
        console.log(`Status do pedido: ${this.numero} atualizado para: ${this.status}`);
    }
}

class PedidoOnline extends Pedido {
    constructor(numero, cliente, status, endereco) {
        super(numero, cliente, status)
        this.endereco = endereco
    }
}

class PedidoPresencial extends Pedido {
    constructor(numero, cliente, status, mesa) {
        super(numero, cliente, status)
        this.mesa = mesa
    }
}


let pedidosOnline = [
    new PedidoOnline('PED-001', 'Gabriel', 'Pendente', 'rua francisco mouratto'),
    new PedidoOnline('PED-002', 'Miguel', 'Processado', 'rua apolonio de tiana')
]
console.log('===== PEDIDOS ONLINE =====');

for (const pedido of pedidosOnline) {
    pedido.mostrarPedido()
    console.log(`Endereço: ${pedido.endereco}`);
    console.log('========================');
}
pedidosOnline[0].processarPedido()



let pedidosPresencial = [
    new PedidoPresencial('PED-101', 'Gustavo', 'Pendente', '01'),
    new PedidoPresencial('PED-102', 'Manuela', 'Processado', '02')
]
console.log('===== PEDIDOS PRESENCIAL =====');

for (const pedido of pedidosPresencial) {
    pedido.mostrarPedido()
    console.log(`Mesa: ${pedido.mesa}`);
    console.log('========================');
}
pedidosPresencial[0].processarPedido()