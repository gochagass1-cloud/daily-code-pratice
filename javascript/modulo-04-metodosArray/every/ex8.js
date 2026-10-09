let etapasRecuperacao = [
    { etapa: "Backup", concluida: true, validada: true, responsavel: "Ana" },
    { etapa: "Banco de dados", concluida: true, validada: false, responsavel: "Carlos" },
    { etapa: "API", concluida: true, validada: true, responsavel: "Mariana" },
    { etapa: "Monitoramento", concluida: false, validada: false, responsavel: "Lucas" }
];


const recuperandoPlano = etapasRecuperacao.every((etapa) => {
    return etapa.concluida === true
    && etapa.validada === true
    && etapa.responsavel !== ""
    && etapa.etapa !== ""
})

console.log(`Plano pronto para encerramento: ${recuperandoPlano}`);

if (recuperandoPlano) {
    console.log("Todos as etapas estão prontas para o encerramento.");
} else {
    console.log("Nem todas as etapas estão prontas para o encerramento.");
}