let funcionario = {
    id: 104,
    nome: "Mariana Costa",
    cargo: "Desenvolvedora Júnior",
    salario: 3800,
    departamento: "Tecnologia",
    ativo: true
};

let alteracoes = {
    cargo: "Desenvolvedora Pleno",
    salario: 5200
};


let funcionarioAtualizado = {
    ...funcionario,
    ...alteracoes
}



console.log("Funcionário original:", funcionario);
console.log("Funcionário atualizado:", funcionarioAtualizado);
