//Processamento de pedidos
let pedidos = [
    "Pedido-001",
    "Pedido-002",
    "Pedido-003",
    "Pedido-004",
    "Pedido-005",
    "Pedido-006"
];

let pedidosProcessados = 0;

for (let i = 0; i < pedidos.length; i++) {
    console.log(`Processando ${pedidos[i]}...`);
    console.log(`Etapa ${i + 1} do processamento.`);

    pedidosProcessados++;

    if (pedidos[i] === "Pedido-004") {
        console.log("Este pedido necessita de análise adicional.");
    }
}

console.log(`Total de pedidos processados: ${pedidosProcessados}`);