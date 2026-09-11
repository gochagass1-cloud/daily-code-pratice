//Dados funcionario
let funcionario = {
    nome: "Carlos",
    cargo: "Desenvolvedor",
    departamento: "Tecnologia",
    salario: 3500
};

for (let propriedade in funcionario) {
    console.log(`${propriedade}: ${funcionario[propriedade]}`);
}