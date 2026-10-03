//Dados chamado Help Desk
const chamado = {
    numero: "CH-2026-184",
    titulo: "Erro ao acessar o sistema",
    solicitante: "Mariana Souza",
    setor: "Financeiro",
    prioridade: "Alta",
    status: "Aberto"
};


//Desestruturando dados do obj chamado e pegando somente {numero, titulo, prioridade, status}
const {numero, titulo, prioridade, status} = chamado



//Exibindo dados obtidos
console.log(`Chamado: ${chamado}`);
console.log(`Título: ${titulo}`);
console.log(`Prioridade: ${prioridade}`);
console.log(`Status: ${status}`);

