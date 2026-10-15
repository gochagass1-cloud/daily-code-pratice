let cadastroCliente = {
    id: 501,
    nome: "Mariana Costa",
    email: "mariana@email.com",
    cpf: "123.456.789-00"
};

let { cpf, ...cadastroParaAnalise } = cadastroCliente;

console.log("Cadastro original:", cadastroCliente);
console.log("Cadastro para análise:", cadastroParaAnalise);