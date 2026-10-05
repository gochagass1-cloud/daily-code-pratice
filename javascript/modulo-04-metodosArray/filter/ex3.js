//Lista de transações
let transacoes = [
    { id: 1, descricao: "Servidor", valor: 2500 },
    { id: 2, descricao: "Mouse", valor: 80 },
    { id: 3, descricao: "Licença", valor: 1500 },
    { id: 4, descricao: "Teclado", valor: 200 }
];

//Filtrando transações com valor acima de R$1000,00
let transacoesAltas = transacoes.filter((transacao) => transacao.valor > 1000)
console.log(transacoesAltas);