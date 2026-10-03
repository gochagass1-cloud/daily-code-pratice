const registrarProdutos = (categoria, ...args) => {
    console.log(`Categoria: ${categoria}`);
    console.log(`Produtos: ${args}`);
}


registrarProdutos(
    "Periféricos",
    "Mouse",
    "Teclado",
    "Headset",
    "Webcam"
);