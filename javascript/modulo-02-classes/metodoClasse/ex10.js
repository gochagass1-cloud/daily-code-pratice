//Classe funcionario
class Funcionario {
    constructor(nome, cargo, setor) {
        this.nome = nome;
        this.cargo = cargo;
        this.setor = setor;
    }

    apresentar() {
        console.log(`Funcionário: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Setor: ${this.setor}`);
    }

    promover(novoCargo) {
        this.cargo = novoCargo;
    }
}

//Classe produto
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    exibirProduto() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
    }

    adicionarEstoque(quantidade) {
        this.estoque += quantidade;
    }

    removerEstoque(quantidade) {
        this.estoque -= quantidade;
    }
}

//Classe pedido
class Pedido {
    constructor(numero, cliente, status) {
        this.numero = numero;
        this.cliente = cliente;
        this.status = status;
    }

    mostrarPedido() {
        console.log(`Pedido: ${this.numero}`);
        console.log(`Cliente: ${this.cliente}`);
        console.log(`Status: ${this.status}`);
    }

    processarPedido() {
        this.status = "Processado";
    }

    cancelarPedido() {
        this.status = "Cancelado";
    }
}


// Funcionários
let funcionarios = [
    new Funcionario("Ana", "Analista", "TI"),
    new Funcionario("Carlos", "Assistente", "Financeiro"),
    new Funcionario("Mariana", "Gerente", "RH")
];

console.log("===== FUNCIONÁRIOS =====");

for (let funcionario of funcionarios) {
    funcionario.apresentar();
    console.log("----------------");
}

funcionarios[0].promover("Desenvolvedora");

console.log("===== APÓS PROMOÇÃO =====");
funcionarios[0].apresentar();


// Produtos
let produtos = [
    new Produto("Notebook", 3500, 10),
    new Produto("Mouse", 80, 25),
    new Produto("Teclado", 150, 15)
];

console.log("===== PRODUTOS =====");

for (let produto of produtos) {
    produto.exibirProduto();
    console.log("----------------");
}

produtos[0].adicionarEstoque(5);
produtos[1].removerEstoque(3);

console.log("===== ESTOQUE ATUALIZADO =====");

for (let produto of produtos) {
    produto.exibirProduto();
    console.log("----------------");
}


// Pedidos
let pedidos = [
    new Pedido("PED-001", "João", "Pendente"),
    new Pedido("PED-002", "Maria", "Pendente"),
    new Pedido("PED-003", "Lucas", "Pendente")
];

console.log("===== PEDIDOS =====");

for (let pedido of pedidos) {
    pedido.mostrarPedido();
    console.log("----------------");
}

pedidos[0].processarPedido();
pedidos[1].cancelarPedido();

console.log("===== PEDIDOS ATUALIZADOS =====");

for (let pedido of pedidos) {
    pedido.mostrarPedido();
    console.log("----------------");
}