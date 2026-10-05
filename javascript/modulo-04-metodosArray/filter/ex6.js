//Lista de pedidos
let pedidos = [
    { numero: "PED-001", valor: 500, pagamento: "Cartão", status: "Pago" },
    { numero: "PED-002", valor: 1200, pagamento: "Pix", status: "Pendente" },
    { numero: "PED-003", valor: 800, pagamento: "Cartão", status: "Pago" },
    { numero: "PED-004", valor: 1500, pagamento: "Boleto", status: "Pendente" }
];


//Filtrando pedidos que estão pendentes e valor acima de 10000
const pendentes = pedidos.filter((pedido) => pedido.status === "Pendente" && pedido.valor > 1000)
console.log(pendentes);