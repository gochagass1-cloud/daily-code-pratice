let pedido = {
    id: "PED-801",
    status: "Aguardando pagamento",
    cliente: {
        nome: "Mariana Costa",
        endereco: {
            cidade: "São Paulo",
            estado: "SP"
        }
    },
    itens: [
        { produto: "Teclado", quantidade: 1, preco: 180 },
        { produto: "Mouse", quantidade: 2, preco: 90 }
    ]
};

let pedidoAuditoria = structuredClone(pedido)

//atualizando dados da copia do pedido da auditoria
pedidoAuditoria.cliente.endereco.cidade = "Campinas"
pedidoAuditoria.itens[0].quantidade = 3

//atualizando status do pedido original
pedido.status = "Pago"


console.log("Pedido original:", pedido);
console.log("Snapshot de auditoria:", pedidoAuditoria);