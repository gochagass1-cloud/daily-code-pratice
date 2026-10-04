let pedidos = [
    "001",
    "002",
    "003",
    "004"
];

let pedidosFormatados = pedidos.map((pedido) => {
    return `PED-${pedido}`
})

console.log(pedidosFormatados)