//Criando class
class Conversor {
    
    static realParaDolar(valor) {
        let cotacao = 0.20
        let convertido = valor * cotacao

        console.log(`Valor digitado em real: R$${valor}`);
        console.log(`Valor convertido para dolar: USD${convertido}`);
    }

    static dolarParaReal(valor) {
        let cotacao = 5.12
        let convertido = valor * cotacao
        
        console.log(`Valor digitado em dolar: USD${valor}`);
        console.log(`Valor convertido para real: R$${convertido}`);
    }
}

//Testando metodo de real para dolar
Conversor.realParaDolar(100)
Conversor.realParaDolar(250)


//Testando metodo de dolar para real
Conversor.dolarParaReal(20)
Conversor.dolarParaReal(50)