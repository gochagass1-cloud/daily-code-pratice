//Limite de processamento
let pedidos = ["PED-001", "PED-002", "PED-003", "PED-004", "PED-005", "PED-006"]
let processados = 0

for (const pedido of pedidos) {
    if (processados === 3) {
        break
    }
    console.log(pedido);
    processados++
}

console.log(`Foram processados: ${processados} pedidos`);
