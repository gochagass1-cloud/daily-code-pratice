//Lista de funcionarios
let funcionarios = [
    { id: 101, nome: "Ana", setor: "RH" },
    { id: 102, nome: "Carlos", setor: "TI" },
    { id: 103, nome: "Mariana", setor: "Financeiro" }
];

//Id do funcionario procurado.
let idProcurado = 102;

//Buscando funcionario com id igual ao id procurado.
const search = funcionarios.find((funcionario) => {
    return funcionario.id === idProcurado
})
console.log(search);