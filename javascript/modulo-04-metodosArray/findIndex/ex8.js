//Lista de pedidos
let pedidos = [
    {
        numero: "PED-201",
        status: "Processado",
        pagamento: "Aprovado"
    },
    {
        numero: "PED-202",
        status: "Processando",
        pagamento: "Aprovado"
    },
    {
        numero: "PED-203",
        status: "Pendente",
        pagamento: "Pendente"
    },
    {
        numero: "PED-204",
        status: "Processando",
        pagamento: "Aprovado"
    },
    {
        numero: "PED-205",
        status: "Pendente",
        pagamento: "Aprovado"
    }
];

//Localizando posição do primeiro pedido que esteja pronto diante das condições
let indicePedido = pedidos.findIndex((pedido) => {
    return pedido.status === "Pendente" && pedido.pagamento === "Aprovado"
})


//Atualizando status do produto, exibindo e verificando se existe.
if (indicePedido !== -1) {
    pedidos[indicePedido].status = "Processando"

    console.log("Pedido atualizado:");
    console.log(pedidos[indicePedido]);
}
else { 
    console.log("Impossível localizar o pedido que esteja pronto.");
}