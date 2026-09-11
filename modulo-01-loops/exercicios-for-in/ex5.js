//Inventario
let equipamentos = ["Computador", "Impressora", "Scanner", "Projetor", "Roteador"]

for (const indice in equipamentos) {
    console.log(`
        Posição: ${indice}
        Equipamento: ${equipamentos[indice]}
        `);
}