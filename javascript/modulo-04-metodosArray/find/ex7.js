//Lista de pedido
let pedidos = [
    {
        numero: "PED-501",
        cliente: "Ana",
        status: "Enviado",
        pagamento: "Aprovado"
    },
    {
        numero: "PED-502",
        cliente: "Carlos",
        status: "Pendente",
        pagamento: "Pendente"
    },
    {
        numero: "PED-503",
        cliente: "Mariana",
        status: "Processando",
        pagamento: "Aprovado"
    },
    {
        numero: "PED-504",
        cliente: "Lucas",
        status: "Pendente",
        pagamento: "Aprovado"
    }
];

//Numero do pedido a ser encontrado.
let numeroPedido = "PED-504";

//Buscando pedido que o numero seja igual ao numero procurado.
const pedidoEncontrado = pedidos.find((pedido) => {
    return pedido.numero === numeroPedido
})

//Verificando se o pedido existe ou não
if (!pedidoEncontrado) {
    console.log("Pedido não encontrado");
//Verificando se o status do pedido é diferente de pendente.
} else if (pedidoEncontrado.status !== "Pendente") {
    console.log("O pedido foi encontrado, mas não pode ser alterado");
}
//Alterando o status dele caso exista.
else{
    pedidoEncontrado.status = "Em alteração"

    console.log("Pedido atualizado:");
    console.log(pedidoEncontrado);
}