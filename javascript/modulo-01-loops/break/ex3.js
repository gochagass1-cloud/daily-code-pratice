//Encontrar produto
let produtos = ['Notebook', 'Mouse', 'Teclado', 'Monitor', 'Headset']

for (const produto of produtos) {
    if (produto === 'Monitor') {
        console.log(`Produto encontrado: ${produto}`);
        break
    }

}