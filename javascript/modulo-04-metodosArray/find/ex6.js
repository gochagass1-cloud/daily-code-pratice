//Lista de contas
let contas = [
    {
        numero: "ACC-001",
        saldo: 500,
        status: "Bloqueada"
    },
    {
        numero: "ACC-002",
        saldo: 0,
        status: "Ativa"
    },
    {
        numero: "ACC-003",
        saldo: 1500,
        status: "Ativa"
    },
    {
        numero: "ACC-004",
        saldo: 3000,
        status: "Ativa"
    }
];


//Buscando a primeira conta elegível conforme os critérios fornecidos
const contaElegivel = contas.find((conta) => {
    return conta.status === "Ativa" && conta.saldo > 0
})

//Verificando se a conta existe e exibindo informações dela.
if (contaElegivel) {
    console.log("Conta elegível encontrada:");
    console.log(`Número: ${contaElegivel.numero}`);
    console.log(`Saldo: ${contaElegivel.saldo}`);
}
else {
    console.log('Não foi possível encontrar nenhuma conta elegível.');
}