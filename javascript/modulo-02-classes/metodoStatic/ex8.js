//Criando class
class Estoque {
    
    static verificarEstoque(nomeProduto, qtd) {
        if (qtd < 5) {
            console.log(`
                Produto: ${nomeProduto}
                Estoque baixo.
                `);
        }
        else {
            console.log(`
                Produto: ${nomeProduto}
                Estoque suficiente.
                `);
        }
    }
}

//Testando metodo de verificação de estoque
Estoque.verificarEstoque('Notebook', 10)
Estoque.verificarEstoque('Celular', 3)