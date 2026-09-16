//Processamento interrompido
let pedidos = ["PED-001", "PED-002", "PED-003", "PED-004", "PED-005"]
let processados = 0

for (const pedido of pedidos) {
    if (pedido === "PED-003") {
        console.log(`Erro: ocorreu um problema ao processar o pedido ${pedido}`);
        break
    }
    console.log(pedido);
    processados++
}

console.log(`Foram processados ${processados} pedidos até a interrupção`);