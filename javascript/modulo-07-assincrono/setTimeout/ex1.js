const chamado = {
    id: "INC-501",
    solicitante: "Mariana Costa",
    descricao: "Falha ao acessar o sistema interno",
    status: "Aberto"
};

console.log(`Chamado: ${chamado.id} registrado.`);

setTimeout(() => {
    console.log(`ID: ${chamado.id}`);
    console.log(`Solicitante: ${chamado.solicitante}`);
    console.log(`Status: ${chamado.status}`);
}, 5000);