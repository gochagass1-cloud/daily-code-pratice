//Processamento de pedidos da empresa
let pedidos = ["Pedido-001", "Pedido-002", "Pedido-003", "Pedido-004", "Pedido-005", "Pedido-006"]
let processados = 0

for (let i = 0; i < pedidos.length; i++) {
    console.log(`
O pedido ${pedidos[i]} está sendo processado.
Número ${i + 1} etapa de processamento.
        `);

        processados++

        if (pedidos[i] === 'Pedido-004') {
            console.log('Este pedido necessita de análise adicional.');
        }
}
console.log(`Total de pedidos processados: ${processados}`);
