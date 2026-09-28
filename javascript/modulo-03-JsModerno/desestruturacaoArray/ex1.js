//Dados registro 
const registro = [
    "FUNC-1042",
    "Mariana Souza",
    "Desenvolvedora Backend",
    "TI",
    5200
];


//Desestruturando o registro para obter somente as info atualizadas
const [, nome, cargo, setor] = registro
console.log(`Nome: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Setor: ${setor}`);
