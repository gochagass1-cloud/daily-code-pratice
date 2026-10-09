//Lista de funcionários
let funcionarios = [
    { id: 101, nome: "Ana", salario: 4200, contaAtiva: true, bancoValidado: true },
    { id: 102, nome: "Carlos", salario: 3500, contaAtiva: true, bancoValidado: true },
    { id: 103, nome: "Mariana", salario: 0, contaAtiva: true, bancoValidado: true },
    { id: 104, nome: "Lucas", salario: 5100, contaAtiva: false, bancoValidado: true }
];


//Validação determinando se os funcionários estão aptos para integrar a folha conforme os critérios fornecidos.
let funcionariosAptos = funcionarios.every((funcionario) => {
    return funcionario.salario > 0
    && funcionario.contaAtiva === true
    && funcionario.bancoValidado === true
})

//Resultado indicando se a folha pode ou não avançar para o processamento.
console.log(`Folha aprovada para processamento: ${funcionariosAptos}`);

//Verificação se todos os funcionários estão aptos ou não estão.
if (funcionariosAptos) {
    console.log("Todos os funcionários estão aptos.");
}
else {
    console.log("Folha bloqueada: existem funcionários com dados inválidos.");
}