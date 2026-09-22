//Criando class Funcionario
class Funcionario {
    constructor(nome, cargo, setor) {
        this.nome = nome
        this.cargo = cargo
        this.setor = setor
    }

    //metodo apresentar funcionario
    apresentar() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Setor: ${this.setor}`);
    }

    //metodo static mostrar total de funcionarios criados
    static mostrarTotal() {
        console.log(`Total de funcionários: ${funcionarios.length}`);
    }
}

//Criando class Produto
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome 
        this.preco = preco
        this.estoque = estoque
    }

    //metodo exibir informações do produto
    exibirProduto() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
    }

    //metodo adicionar valor ao estoque
    adicionarEstoque(valor) {
        this.estoque += valor
    }

    //metodo static mostrar mensagem do estoque atualizado
    static mostrarMensagemEstoque(produto) {
        console.log(`Estoque atual de ${produto.nome}: ${produto.estoque}`);
    }
}

//Criando class Pedido
class Pedido {
    constructor(numero, cliente, status) {
        this.numero = numero
        this.cliente = cliente
        this.status = status
    }

    //metodo mostrar informações do pedido
    mostrarPedido() {
        console.log(`Numero: ${this.numero}`);
        console.log(`Cliente: ${this.cliente}`);
        console.log(`Status: ${this.status}`);
    }

    //metodo com verificação de status do pedido processado
    processarPedido() {
        if (this.status === 'Processado') {
            console.log('O pedido já está com status Processado');
        }
        else {
            this.status = 'Processado'
            console.log('Pedido sendo processado');
            console.log(`Status atual: ${this.status}`);
        }
    }

    //metodo static mostrar mensagem que o sistema está funcionando
    static mostrarStatusSistema() {
        console.log('Sistema de pedidos funcionando.');
    }
}

//Criação dos arrays dos funcionarios
let funcionarios = [
    new Funcionario('Gabriel', 'Desenvolvedor', 'TI'),
    new Funcionario('Miguel', 'Cybersecurity', 'TI'),
    new Funcionario('Gustavo', 'Desenvolvedor', 'TI')
]

console.log('==== FUNCIONÁRIOS ====');

//percorrendo todos funcionarios com metodo apresentar e testando o static mostrarTotal
for (const funcionario of funcionarios) {
    funcionario.apresentar()
    console.log('---------------------');
}
Funcionario.mostrarTotal()


//Criação dos arrays dos produtos
let produtos = [
    new Produto(`Notebook`, 2500, 15),
    new Produto(`Celular`, 5500, 45),
    new Produto(`Monitor`, 700, 25)
]

console.log('==== PRODUTOS ====');

//percorrendo todos produtos com metodo de exibirProduto
for (const produto of produtos) {
    produto.exibirProduto()
    console.log('---------------------')
}

//Alterando estoque
produtos[0].adicionarEstoque(5)
produtos[1].adicionarEstoque(3)

//Exibindo e testando static mostrarMensagemEstoque
console.log('==== ESTOQUE ATUALIZADO ====');
Produto.mostrarMensagemEstoque(produtos[0])
Produto.mostrarMensagemEstoque(produtos[1])


//Criação dos arrays dos pedidos
let pedidos = [
    new Pedido('PED-001', 'Gabriel', 'Pendente'),
    new Pedido('PED-002', 'Miguel', 'Processado'),
    new Pedido('PED-003', 'Gustavo', 'Pendente')
]
console.log('==== PEDIDOS ====');

//Percorrendo todos os pedidos com metodo de mostrarPedido e processarPedido + static mostrarStatusSistema
for (const pedido of pedidos) {
    pedido.mostrarPedido()
    pedido.processarPedido()
    console.log('----------------------');
}
Pedido.mostrarStatusSistema()