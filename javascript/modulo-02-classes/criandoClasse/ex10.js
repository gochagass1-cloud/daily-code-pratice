//Criação Classes
class Funcionario {
    constructor(nome, cargo, setor) {
        this.nome = nome
        this.cargo = cargo
        this.setor = setor
    }
}

class Produto {
    constructor(nome, categoria, estoque) {
        this.nome = nome
        this.categoria = categoria
        this.estoque = estoque
    }
}

class Pedido {
    constructor(numero, cliente, valor, status) {
        this.numero = numero
        this.cliente = cliente
        this.valor = valor
        this.status = status
    }
}

//Criação Funcionarios
let funcionarios = [
    new Funcionario('Lucas', 'Desenvolvedor', 'TI'),
    new Funcionario('Mariana', 'Analista', 'Financeiro'),
    new Funcionario('Rafael', 'Assistente', 'Administrativo')
]

//Criação Produtos
let produtos = [
    new Produto('Notebook', 'Eletrônicos', 15),
    new Produto('Mouse', 'Periféricos', 32),
    new Produto('Teclado', 'Periféricos', 20),
    new Produto('Monitor', 'Eletrônicos', 8)
]

//Criação Pedidos 
let pedidos = [
    new Pedido(1001, 'João', 450.00, 'Pago'),
    new Pedido(1002, 'Ana', 1299.90, 'Enviado'),
    new Pedido(1003, 'Pedro', 780.50, 'Pendente'),
    new Pedido(1004, 'Carla', 2150.00, 'Pago'),
    new Pedido(1005, 'Bruno', 320.00, 'Cancelado')
]

//Percorrendo os arrays
console.log('======= FUNCIONARIOS =======');
for (const funcionario of funcionarios) {
    console.log(`
        Nome: ${funcionario.nome}
        Cargo: ${funcionario.cargo}
        Setor: ${funcionario.setor}

        `);
}

console.log('======= PRODUTOS =======');
for (const produto of produtos) {
    console.log(`
        Nome: ${produto.nome}
        Categoria: ${produto.categoria}
        Estoque: ${produto.estoque}

        `);
}

console.log('======= PEDIDOS =======');
for (const pedido of pedidos) {
    console.log(`
        Número: ${pedido.numero}
        Cliente: ${pedido.cliente}
        Valor: R$${pedido.valor}
        Status: ${pedido.status}
        
        `);
}
