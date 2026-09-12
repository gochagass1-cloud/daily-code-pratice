//Processamento de pedidos
const pedidos = ["Pedido-001", "Pedido-002", "Pedido-003", "Pedido-004", "Pedido-005"]
let processados = 0

for (const pedido of pedidos) {
    console.log(`Pedido: ${pedido}`);

    if (pedido.includes('Pedido-004')) {
        console.log(`O pedido ${pedido} precisa de análise adicional`);
    }

    processados++
}

console.log(`Total de pedidos processados: ${processados}`);