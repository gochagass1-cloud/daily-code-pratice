function enviarNotificacao(mensagem, ...destinatarios) {
    console.log(`Mensagem: ${mensagem}`);
    console.log(`Destinatários: ${destinatarios}`);
}


enviarNotificacao(
    "A manutenção do sistema ocorrerá às 22h.",
    "Carlos",
    "Mariana",
    "Lucas",
    "Ana"
);