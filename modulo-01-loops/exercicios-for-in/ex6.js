//Análise de Cadastro
let cliente = {
    nome: 'Gabriel',
    idade: 18,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',
    telefone: '11986985940'
}

for (const prop in cliente) {
    console.log(`
        Nome Prop: ${prop}
        Valor: ${cliente[prop]}
        `);
}