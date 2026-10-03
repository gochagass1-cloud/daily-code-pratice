//Dados atendimento
const atendimento = {
    protocolo: "ATD-92841",
    cliente: "Lucas Ferreira",
    sistema: "Portal Corporativo",
    categoria: "Acesso",
    prioridade: "Alta",
    tecnico: "Mariana Souza",
    status: "Em atendimento"
};



//Desestruturando dados do obj atendimento. Pegando somente {protocolo, cliente, sistema, categoria, prioridade}
const {protocolo, cliente, sistema, categoria, prioridade} = atendimento


//Exibindo dados obtidos
console.log(`Protocolo: ${protocolo}`);
console.log(`Cliente: ${cliente}`);
console.log(`Sistema: ${sistema}`);
console.log(`Categoria: ${categoria}`);
console.log(`Prioridade: ${prioridade}`);
