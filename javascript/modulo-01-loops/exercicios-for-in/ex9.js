//Sistema de pedidos
let pedido = {
    codigo: "PED-001",
    cliente: "Carlos",
    produto: "Notebook",
    quantidade: 2,
    preco: 3500,
    status: "Aprovado"
};

for (let propriedade in pedido) {

    if (propriedade === "status") {
        console.log(`Status atual do pedido: ${pedido[propriedade]}`);

    } else if (propriedade === "preco") {
        console.log(`Valor do pedido: R$ ${pedido[propriedade]}`);

    } else {
        console.log(`${propriedade}: ${pedido[propriedade]}`);
    }
}