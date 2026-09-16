//Busca em cadastro
let clientes = ["Ana", "Carlos", "João", "Mariana", "Lucas", "Pedro"]
let nomeProcurado = 'Carlos'
let encontrado = false

for (const cliente of clientes) {
    
    if (cliente === nomeProcurado) {
        console.log(`Cliente localizado: ${cliente}`);
        encontrado = true;
        break
    }
}

if (encontrado === false) {
        console.log(`Cliente não encontrado.`);
    }