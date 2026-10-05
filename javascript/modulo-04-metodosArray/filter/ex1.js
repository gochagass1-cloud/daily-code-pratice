//Lista de funcionários
let funcionarios = [
    { nome: "Ana", status: "Ativo" },
    { nome: "Carlos", status: "Inativo" },
    { nome: "Mariana", status: "Ativo" },
    { nome: "Lucas", status: "Inativo" }
];

//Filtrando somente os funcionários com status igual a "Ativo"
let funcionariosAtivos = funcionarios.filter((funcionario) => funcionario.status === "Ativo")
console.log(funcionariosAtivos);
