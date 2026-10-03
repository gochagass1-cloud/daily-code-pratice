function registrarOperacao(tipo, responsavel, ...recursos) {
    console.log('==== OPERAÇÃO ====');
    console.log(`Tipo: ${tipo}`);
    console.log(`Responsável: ${responsavel}`);
    console.log(`Recursos envolvidos: ${recursos}`);
}


registrarOperacao(
    "Manutenção",
    "Carlos",
    "Servidor Web",
    "Banco de Dados",
    "API",
    "Firewall"
);