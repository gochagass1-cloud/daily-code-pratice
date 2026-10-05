let pedidos = [
    {
        numero: "PED-001",
        cliente: "Carlos",
        produto: "Notebook",
        quantidade: 2,
        status: "Processando"
    },
    {
        numero: "PED-002",
        cliente: "Mariana",
        produto: "Mouse",
        quantidade: 3,
        status: "Enviado"
    },
    {
        numero: "PED-003",
        cliente: "Lucas",
        produto: "Teclado",
        quantidade: 1,
        status: "Pendente"
    }
];

let atualizacaoDadosPed = pedidos.map((pedido) => {
    return {
        pedido: pedido.pedido,
        cliente: pedido.cliente,
        status: pedido.status
    }
})

console.log(atualizacaoDadosPed);