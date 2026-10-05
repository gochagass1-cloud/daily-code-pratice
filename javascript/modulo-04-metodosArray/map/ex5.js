let statusPedidos = [
    "pendente",
    "processando",
    "enviado",
    "cancelado"
];

let statusFormatado = statusPedidos.map((statusPed) => {
    console.log(`Status: ${statusPed}`);
})

