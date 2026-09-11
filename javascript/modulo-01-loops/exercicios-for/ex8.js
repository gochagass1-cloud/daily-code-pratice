//Busca em uma lista de clientes
let clientes = ["Ana", "Carlos", "Mariana", "Lucas", "Pedro", "João"];

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i] === "Mariana") {
        console.log(`Cliente localizado na posição ${i}.`);
        break;
    }
}