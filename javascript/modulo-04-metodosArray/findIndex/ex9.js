//Lista de clientes
let clientes = [
    {
        id: 501,
        nome: "Ana",
        status: "Ativo",
        plano: "Premium",
        migrado: true
    },
    {
        id: 502,
        nome: "Carlos",
        status: "Ativo",
        plano: "Regular",
        migrado: false
    },
    {
        id: 503,
        nome: "Mariana",
        status: "Inativo",
        plano: "Premium",
        migrado: false
    },
    {
        id: 504,
        nome: "Lucas",
        status: "Ativo",
        plano: "Premium",
        migrado: false
    }
];


//Encontrando o primeiro cliente que pode ser migrado conforme as condições.
let indiceCliente = clientes.findIndex((cliente) => {
    return cliente.status === "Ativo"
    && cliente.plano === "Premium"
    && cliente.migrado === false
})

//Atualizando a migração do cliente para true e exibindo o cliente atualizado.
if (indiceCliente !== -1) {
    clientes[indiceCliente].migrado = true

    console.log('Cliente migrado:');
    console.log(clientes[indiceCliente]);
}
else {
    console.log('Não foi encontrado nenhum cliente que possa ser migrado.');
}