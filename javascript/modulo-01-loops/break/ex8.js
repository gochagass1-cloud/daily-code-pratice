//Produto com estoque crítico
let produtos = [
    { nome: "Notebook", estoque: 15 },
    { nome: "Mouse", estoque: 10 },
    { nome: "Teclado", estoque: 3 },
    { nome: "Monitor", estoque: 8 },
    { nome: "Headset", estoque: 2 }
];

for (let produto of produtos) {
    if (produto.estoque < 5) {
        console.log("Estoque crítico:", produto.nome);
        break;
    }
}
