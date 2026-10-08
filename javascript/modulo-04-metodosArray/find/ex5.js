//Lista de clientes
let clientes = [
    {
        nome: "Ana",
        plano: "Regular",
        status: "Ativo",
        compras: 20
    },
    {
        nome: "Carlos",
        plano: "Premium",
        status: "Inativo",
        compras: 30
    },
    {
        nome: "Mariana",
        plano: "Premium",
        status: "Ativo",
        compras: 5
    },
    {
        nome: "Lucas",
        plano: "Premium",
        status: "Ativo",
        compras: 15
    }
];



//Encontrando cliente elegível conforme os critérios fornecidos.
const clienteElegivel = clientes.find((cliente) => {
    return cliente.plano === "Premium" &&
        cliente.status === "Ativo" &&
        cliente.compras >= 10
});


//Verificando se o cliente procurado existe ou não e exibindo ele.
if (clienteElegivel) {
    console.log("Cliente elegível encontrado:");
    console.log(`Nome: ${clienteElegivel.nome}`);
    console.log(`Plano: ${clienteElegivel.plano}`);
    console.log(`Status: ${clienteElegivel.status}`);
    console.log(`Compras: ${clienteElegivel.compras}`);
} 
else {
    console.log("Nenhum cliente elegível encontrado.");
}
