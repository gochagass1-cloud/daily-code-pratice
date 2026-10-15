let configuracaoCliente = {
    id: 501,
    nome: "Empresa Alfa",
    notificacoes: {
        email: true,
        aplicativo: true,
        sms: false
    },
    idioma: "pt-BR",
    tema: "escuro"
};

let novaPreferencia = {
    email: false
};


let configuracaoAtualizada = {
    ...configuracaoCliente,
    notificacoes: {
        ...configuracaoCliente.notificacoes,
        ...novaPreferencia
    }
}

console.log("Configurações antigas:", configuracaoCliente);
console.log("Configurações atualizadas:", configuracaoAtualizada);