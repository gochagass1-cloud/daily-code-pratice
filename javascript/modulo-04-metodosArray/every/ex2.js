//Lista de remessa de pedidos.
let remessa = [
    { pedido: "PED-801", pagamento: "Aprovado", estoqueReservado: true, enderecoValidado: true },
    { pedido: "PED-802", pagamento: "Aprovado", estoqueReservado: true, enderecoValidado: true },
    { pedido: "PED-803", pagamento: "Pendente", estoqueReservado: true, enderecoValidado: true },
    { pedido: "PED-804", pagamento: "Aprovado", estoqueReservado: false, enderecoValidado: true }
];

//Validação dos pedidos aprovados conforme os critérios fornecidos.
const pedidoAprovado = remessa.every((pedido) => {
    return pedido.pagamento === "Aprovado"
    && pedido.estoqueReservado === true
    && pedido.enderecoValidado === true
})

//Resultado informando se os pedidos estão prontos para serem liberados ou não.
console.log(`Remessa de pedidos liberado para transportadora: ${pedidoAprovado}`);


//Verificação se todos os pedidos estão liberados ou se a coleta está incompleta.g
if (pedidoAprovado) {
    console.log("Todos os pedidos estão liberados para coleta da transportadora.");
} else {
    console.log("Coleta incompleta: Nem todos pedidos estão liberados para coleta.");
}