//Cadastro de produto
let produto = {
    nome: 'Notebook',
    categoria: 'Tecnologia',
    preco: 4300,
    estoque: 50
}

for (const prop in produto) {
    console.log(prop);
    console.log(produto[prop]);
}