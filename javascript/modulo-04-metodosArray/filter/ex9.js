//Lista de pedidos
let pedidos = [
    {
        numero: "PED-001",
        cliente: "Ana",
        valor: 2500,
        status: "Processando",
        pagamento: "Aprovado"
    },
    {
        numero: "PED-002",
        cliente: "Carlos",
        valor: 800,
        status: "Cancelado",
        pagamento: "Estornado"
    },
    {
        numero: "PED-003",
        cliente: "Mariana",
        valor: 3200,
        status: "Processando",
        pagamento: "Aprovado"
    },
    {
        numero: "PED-004",
        cliente: "Lucas",
        valor: 1500,
        status: "Pendente",
        pagamento: "Aprovado"
    }
];

//Filtrando produtos que podem entrar na separação com pagamento aprovado e status processando.
let pedidosSeparacao = pedidos.filter((pedido) => {
    return pedido.pagamento === "Aprovado" && pedido.status === "Processando"
})

console.log(pedidosSeparacao);