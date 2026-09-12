//Verificação de pedidos
const pedidos = ["Pedido-001", "Pedido-002", "Pedido-003", "Pedido-004"]

for (const pedido of pedidos) {
    console.log(`Pedido: ${pedido} está sendo analisado.`);

    if (pedido === 'Pedido-003') {
        console.log(`O pedido ${pedido} precisa de atenção`);
    }
}