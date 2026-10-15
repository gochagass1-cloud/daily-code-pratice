let configuracaoPadrao = {
    tema: "claro",
    idioma: "pt-BR",
    notificacoes: {
        email: true,
        push: true
    },
    painel: {
        widgets: ["vendas", "usuarios"],
        atualizacaoAutomatica: true
    }
};

let novoCliente = "Empresa Alfa";

let configuracaoCliente = structuredClone(configuracaoPadrao)

configuracaoCliente.tema = "escuro"
configuracaoCliente.notificacoes.email = false
configuracaoCliente.painel.widgets.push("financeiro")


console.log("Novo cliente:", novoCliente);
console.log("Configuração padrão:", configuracaoPadrao);
console.log("Configuração atualizada:", configuracaoCliente);
