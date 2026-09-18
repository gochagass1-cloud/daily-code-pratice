//Criando classe Produto
class Produto {
    
    static gerarCodigo(numeroProduto) {
        console.log(`Código gerado. Produto: PROD-${numeroProduto}`);
    }
}

//Geração dos códigos
Produto.gerarCodigo('001')
Produto.gerarCodigo('002')
Produto.gerarCodigo('003')