//Lista de pedido
let pedidos = [
    { numero: "PED-101", cliente: "Ana", status: "Enviado" },
    { numero: "PED-102", cliente: "Carlos", status: "Processando" },
    { numero: "PED-103", cliente: "Mariana", status: "Pendente" },
    { numero: "PED-104", cliente: "Lucas", status: "Processando" },
    { numero: "PED-105", cliente: "Pedro", status: "Pendente" }
];

//Localizando pedido do numero fornecido.
let localizarPedido = pedidos.findIndex((pedido) => {
    return pedido.numero === "PED-104"
})


//Verificação e atualização do status do pedido localizado.
if (localizarPedido !== -1) {
    pedidos[localizarPedido].status = "Enviado"

    console.log("Pedido atualizado:");
    console.log(pedidos[localizarPedido]);
}
else {
    console.log('Produto não encontrado.');
}