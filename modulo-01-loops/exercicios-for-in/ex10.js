//Relatório completo empresa
let infoEmpresa = {
    nome: 'JsTech',
    cnpj: '00.ABC.000/0001-00',
    setor: 'Tecnologia',
    qtdFuncionarios: 1000,
    cidade: 'São Paulo',
    status: 'Ativo'
}

for (const prop in infoEmpresa) {
    console.log(`${prop} : ${infoEmpresa[prop]}`)

    if (prop === 'status') {
        console.log(`A empresa ${infoEmpresa.nome} está ${infoEmpresa.status}`);
    }

    if (prop === 'qtdFuncionarios') {
        console.log(`A empresa ${infoEmpresa.nome} tem ${infoEmpresa.qtdFuncionarios} funcionários`);
    }


}