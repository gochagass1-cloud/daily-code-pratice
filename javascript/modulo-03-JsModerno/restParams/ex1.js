function registrarReuniao(responsavel, ...args) {
    console.log(`O responsável pela reunião é: ${responsavel}`);
    console.log('===== PARTICIPANTES ======');
    console.log(...args);
}


registrarReuniao(
    'Gabriel',
    "Mariana",
    "Carlos",
    "Ana",
    "Lucas"
)