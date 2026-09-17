//Controle de pedidos
class Pedido {
    constructor(numero, cliente, valor, status) {
        this.numero = numero
        this.cliente = cliente
        this.valor = valor
        this.status = status
    }
}

const pedido1 = new Pedido('111', 'Gabriel', 120, 'Enviado')
const pedido2 = new Pedido('222', 'Miguel', 50, 'Entregue')
const pedido3 = new Pedido('333', 'Manuela', 250, 'Preparando')
const pedido4 = new Pedido('444', 'Gustavo', 190, 'Pendente')
const pedido5 = new Pedido('555', 'Eduarda', 530, 'A caminho')

let pedidos = [pedido1, pedido2, pedido3, pedido4, pedido5]

for (const pedido of pedidos) {
    console.log(`
        Número: ${pedido.numero}
        Cliente: ${pedido.cliente}
        Valor: ${pedido.valor}
        Status: ${pedido.status}
        `);
}