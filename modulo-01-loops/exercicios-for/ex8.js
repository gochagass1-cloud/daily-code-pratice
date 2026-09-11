//Busca em uma lista de clientes
let nomes = ['Ana', 'Carlos', 'Mariana', 'Lucas', 'Pedro', 'João']

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === 'Mariana') {
        console.log('Cliente localizado.');
        console.log(`Posição: ${i}`);
        break
    }
}

