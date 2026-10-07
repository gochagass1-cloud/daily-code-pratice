//Lista de pedidos
let pedidos = [
    { numero: "PED-001", cliente: "Ana", status: "Enviado" },
    { numero: "PED-002", cliente: "Carlos", status: "Pendente" },
    { numero: "PED-003", cliente: "Mariana", status: "Processando" }
];


//numero do pedido para localizar
let numeroPedido = "PED-002";

//Encontrando o pedido com o numero procurado.
const result = pedidos.find((pedido) => {
    return pedido.numero === numeroPedido
})


//Verificando se o pedido existe ou se não.
if (result !== undefined) {
    console.log('Pedido localizado:');
    console.log(`Pedido: ${result.numero}`);
    console.log(`Cliente: ${result.cliente}`);
    console.log(`Status: ${result.status}`);
} else {
    console.log('O pedido não foi encontrado.');
}