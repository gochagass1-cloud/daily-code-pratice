//Localização de informação
let pedido = {
    numero: 15,
    cliente: 'Gabriel',
    produto: 'Iphone 15',
    quantidade: 3,
    status: 'enviado'
}

for (const prop in pedido) {
    console.log(`${prop} : ${pedido[prop]}`);

    if (prop === 'status') {
        console.log(`Status do pedido: ${pedido[prop]}`);
    }
}