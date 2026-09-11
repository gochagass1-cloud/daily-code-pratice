let funcionario = {
    nome: 'Gabriel',
    cargo: 'Analista de Dados',
    departamento: 'TI',
    salario: 5938
}

for (const propriedade in funcionario) {
    console.log(propriedade);
    console.log(funcionario[propriedade]);
}