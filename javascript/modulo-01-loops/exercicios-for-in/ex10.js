//Relatorio completo da empresa
let empresa = {
    nome: "Tech Solutions",
    CNPJ: "12.345.678/0001-90",
    setor: "Tecnologia",
    quantidadeFuncionarios: 150,
    cidade: "São Paulo",
    status: "Ativa"
};

for (let propriedade in empresa) {

    console.log(`${propriedade}: ${empresa[propriedade]}`);

    if (propriedade === "status") {

        if (empresa[propriedade] === "Ativa") {
            console.log("A empresa está ativa.");
        }

    } else if (propriedade === "quantidadeFuncionarios") {

        console.log(`Quantidade de funcionários encontrada: ${empresa[propriedade]}`);
    }
}