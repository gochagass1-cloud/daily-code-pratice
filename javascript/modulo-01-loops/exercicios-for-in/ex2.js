//Cadastro de produto
let produto = {
    nome: "Notebook",
    categoria: "Eletrônicos",
    preco: 3500,
    estoque: 10
};

for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}