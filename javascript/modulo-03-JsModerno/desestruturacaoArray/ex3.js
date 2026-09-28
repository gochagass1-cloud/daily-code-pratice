//Chamado
const chamado = [
    "CH-2026-0184",
    "Erro ao acessar o sistema MV",
    "Carlos Almeida",
    "Alta",
    "Aberto",
    "TI"
];

//Desestruturando o chamado para montar uma identificação de encaminhamento somente com dados necessários
const [, tituloChamado, solicitante, prioridade, , setor] = chamado

//Exibindo os dados
console.log(`Chamado: ${tituloChamado}`);
console.log(`Solicitante: ${solicitante}`);
console.log(`Prioridade: ${prioridade}`);
console.log(`Setor: ${setor}`);
