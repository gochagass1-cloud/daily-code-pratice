//Lista de funcionários
let funcionarios = [
    { id: 101, nome: "Ana", setor: "RH" },
    { id: 102, nome: "Carlos", setor: "TI" },
    { id: 103, nome: "Mariana", setor: "Financeiro" },
    { id: 104, nome: "Lucas", setor: "TI" }
];


//Encontrando o funcionário com id 103 pelo indice.
const indiceFuncionario = funcionarios.findIndex((funcionario) => {
    return funcionario.id === 103
})

console.log(indiceFuncionario);