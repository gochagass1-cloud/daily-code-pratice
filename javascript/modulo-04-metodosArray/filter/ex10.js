//Lista de clientes
let clientes = [
    {
        id: 1,
        nome: "Ana",
        nivel: "Premium",
        compras: 20,
        status: "Ativo"
    },
    {
        id: 2,
        nome: "Carlos",
        nivel: "Regular",
        compras: 30,
        status: "Ativo"
    },
    {
        id: 3,
        nome: "Mariana",
        nivel: "Premium",
        compras: 5,
        status: "Inativo"
    },
    {
        id: 4,
        nome: "Lucas",
        nivel: "Premium",
        compras: 15,
        status: "Ativo"
    },
    {
        id: 5,
        nome: "Pedro",
        nivel: "Regular",
        compras: 50,
        status: "Ativo"
    }
];


let atendimentoPrioritario = clientes.filter((cliente) => {
    return cliente.nivel === 'Premium' 
    && cliente.status === "Ativo" 
    && cliente.compras >= 10
})

console.log(atendimentoPrioritario);