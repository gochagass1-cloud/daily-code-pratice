//registro evento
const evento = [
    "EVT-88421",
    "Gabriel",
    "Login realizado",
    "2026-09-28 14:32",
    "192.168.0.15"
];

//Desestruturando o registro de evento para obter somente as informações necessárias para rotina de auditoria
const [, user, acao, , enderecoip] = evento

//exibindo os dados
console.log(`Usuário: ${user}`);
console.log(`Ação: ${acao}`);
console.log(`IP: ${enderecoip}`);
