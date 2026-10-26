let transacao = {
    id: "TX-9001",
    valor: 2450,
    cliente: {
        id: 88,
        nome: "Empresa Beta",
        conta: {
            agencia: "0001",
            ativa: true
        }
    },
    itens: [
        {
            codigo: "SERV-01",
            valor: 1500,
            validacao: {
                aprovada: true,
                observacoes: ["Documento conferido"]
            }
        },
        {
            codigo: "SERV-02",
            valor: 950,
            validacao: {
                aprovada: false,
                observacoes: ["Aguardando comprovante"]
            }
        }
    ],
    auditoria: {
        tentativas: 2,
        alertas: ["Divergencia cadastral"]
    }
};


let transacaoCopia = structuredClone(transacao)
transacaoCopia.cliente.conta.ativa = false
transacaoCopia.itens[1].valor = 1400
transacaoCopia.itens[1].validacao.aprovada = true
transacaoCopia.itens[1].validacao.observacoes.push("Comprovante recebido")
transacaoCopia.auditoria.alertas.push("Erro nos dados fornecidos")


console.log('Transação base:', JSON.stringify(transacao, null, 2));
console.log('Cópia da transação', JSON.stringify(transacaoCopia, null, 2));
console.log("As transações são diferentes?", transacao !== transacaoCopia);