let pedidos = [
    { id: 1001, canal: "Site", valor: 1200, status: "Concluído" },
    { id: 1002, canal: "Aplicativo", valor: 850, status: "Concluído" },
    { id: 1003, canal: "Site", valor: 500, status: "Cancelado" },
    { id: 1004, canal: "Loja", valor: 1700, status: "Concluído" },
    { id: 1005, canal: "Aplicativo", valor: 650, status: "Concluído" }
];

let receitaPorCanal = pedidos.reduce(function (acumulador, pedido) {
    if (pedido.status === "Concluído") {
        if (acumulador[pedido.canal] === undefined) {
            acumulador[pedido.canal] = 0;
        }

        acumulador[pedido.canal] += pedido.valor;
    }

    return acumulador;
}, {});

console.log(receitaPorCanal);