//Sistema de pedidos
let pedido = {
    codigo: '5940',
    cliente: 'Gabriel Chagas',
    produto: 'Big mac',
    quantidade: 1,
    preco: 'R$34,90',
    status: 'entregue'
}

for (const prop in pedido) {
    console.log(`${prop} : ${pedido[prop]}`);
    
    if (prop === 'status') {
        console.log('Seu pedido foi entregue!');
    }

    if (prop === 'preco') {
        console.log(`Seu ${pedido.produto} saiu por ${pedido.preco}`);
    }
}