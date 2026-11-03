const pedido = {
    codigo: "PED-2026",
    cliente: "Lucas Martins",
    valorTotal: 459.90,
    status: "Aprovado"
};

console.log(`O pedido: ${pedido.codigo} foi processado.`);

setTimeout(() => {
    console.log("==== INFORMAÇÕES DO PEDIDO: ====");
    console.log(`Código: ${pedido.codigo}`);
    console.log(`Cliente: ${pedido.cliente}`);
    console.log(`Valor total: R$${pedido.valorTotal}`);
}, 3000);