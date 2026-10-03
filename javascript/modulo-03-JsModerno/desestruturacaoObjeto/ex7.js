//Dados de um chamado
const chamado = {
    id: "INC-10482",
    titulo: "Servidor indisponível",
    solicitante: "Carlos Almeida",
    setor: "Financeiro",
    prioridade: "Crítica",
    ambiente: "Produção",
    responsavel: "Equipe de Infraestrutura",
    status: "Investigando"
};


//Desestruturando o obj chamado pegando somente os dados: {id, titulo, prioridade, ambiente, responsavel, status}
const {id, titulo, prioridade, ambiente, responsavel, status} = chamado



//Exibindo os dados obtidos
console.log(`ID: ${id}`);
console.log(`Titulo: ${titulo}`);
console.log(`Prioridade: ${prioridade}`);
console.log(`Ambiente: ${ambiente}`);
console.log(`Responsável: ${responsavel}`);
console.log(`Status: ${status}`);
