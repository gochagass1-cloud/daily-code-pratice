//Criando class
class Pedido {
    
    static verificarStatus(status) {
        if (status === 'Processando') {
            console.log('O pedido foi processado.');
        }
        else if (status === 'Pendente') {
            console.log('O pedido está pendente');
        }
        else if (status === 'Cancelado') {
            console.log('O pedido foi cancelado.');
        }
    }
}

//Testando os trêS status
Pedido.verificarStatus('Processando')
Pedido.verificarStatus('Pendente')
Pedido.verificarStatus('Cancelado')