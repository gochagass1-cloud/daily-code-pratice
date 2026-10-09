let inventario = [
    { codigo: "EST-01", quantidade: 12, minimo: 5, auditado: true },
    { codigo: "EST-02", quantidade: 8, minimo: 8, auditado: true },
    { codigo: "EST-03", quantidade: 3, minimo: 4, auditado: true },
    { codigo: "EST-04", quantidade: 10, minimo: 2, auditado: false }
];


const itensAptos = inventario.every((item) => {
    return item.codigo !== ""
    && item.quantidade >= item.minimo
    && item.auditado === true
})

console.log(`Fechamento do inventário apto: ${itensAptos}`);

if (itensAptos) {
    console.log("Inventário fechado: Todos os itens estão aptos para o fechamento do inventário.");
} else {
    console.log("Inventário aberto: Nem todos os itens estão aptos para o fechamento do inventário.");
}