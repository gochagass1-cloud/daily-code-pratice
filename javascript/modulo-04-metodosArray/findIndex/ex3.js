//Lista de pedidos
let pedidos = [
    { numero: "PED-001", status: "Processado" },
    { numero: "PED-002", status: "Processado" },
    { numero: "PED-003", status: "Pendente" },
    { numero: "PED-004", status: "Pendente" },
    { numero: "PED-005", status: "Processando" }
];


//Encontrando o primeiro pedido pendente.
let pedidoPendente = pedidos.findIndex((pedido) => {
    return pedido.status === "Pendente"
})

console.log(pedidoPendente);