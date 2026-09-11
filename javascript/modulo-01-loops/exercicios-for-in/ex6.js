//Analise de cadastro
let cliente = {
    nome: "Mariana",
    idade: 25,
    cidade: "São Paulo",
    profissao: "Desenvolvedora",
    telefone: "11999999999"
};

for (let propriedade in cliente) {
    console.log(`Propriedade: ${propriedade}`);
    console.log(`Valor: ${cliente[propriedade]}`);
}