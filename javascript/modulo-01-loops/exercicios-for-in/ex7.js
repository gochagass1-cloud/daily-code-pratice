//Localização de informação
let pedido = {
    numero: 1001,
    cliente: "João",
    produto: "Notebook",
    quantidade: 2,
    status: "Processando"
};

for (let propriedade in pedido) {
    console.log(`${propriedade}: ${pedido[propriedade]}`);

    if (propriedade === "status") {
        console.log(`Status encontrado: ${pedido[propriedade]}`);
    }
}