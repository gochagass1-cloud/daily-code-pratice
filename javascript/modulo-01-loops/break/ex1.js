//Encontrar pedido
const pedidos = ['Pedido-001', 'Pedido-002', 'Pedido-003', 'Pedido-004'] 

for (const pedido of pedidos) {
    console.log(pedido);
    
    if (pedido.includes('Pedido-003')) {
        console.log('Pedido encontrado.');
        break
    }
}
