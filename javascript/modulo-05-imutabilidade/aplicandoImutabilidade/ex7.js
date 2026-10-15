let pedidos = [
    { remessa: "REM-09", cliente: "Ana", status: "Separado" },
    { remessa: "REM-10", cliente: "Carlos", status: "Separado" },
    { remessa: "REM-11", cliente: "Mariana", status: "Aguardando" }
];

let remessaConfirmada = "REM-10";
let novoStatus = "Enviado";

let pedidosAtualizados = pedidos.map(pedido => {
    if (pedido.remessa === remessaConfirmada) {
        return {
            ...pedido,
            status: novoStatus
        };
    }

    return pedido;
});

console.log("Pedidos originais:", pedidos);
console.log("Pedidos atualizados:", pedidosAtualizados);
