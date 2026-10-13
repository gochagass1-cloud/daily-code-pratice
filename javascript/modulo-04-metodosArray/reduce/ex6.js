let alertas = [
    { id: 1, severidade: "Alta" },
    { id: 2, severidade: "Media" },
    { id: 3, severidade: "Alta" },
    { id: 4, severidade: "Baixa" },
    { id: 5, severidade: "Critica" },
    { id: 6, severidade: "Media" },
    { id: 7, severidade: "Alta" }
];

const resumoAlertas = alertas.reduce(function (acumulador, alerta) {
    if (acumulador[alerta.severidade] === undefined) {
        acumulador[alerta.severidade] = 0;
    }

    acumulador[alerta.severidade]++;

    return acumulador;
}, {});

console.log(resumoAlertas);