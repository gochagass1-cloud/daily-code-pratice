let incidentes = [
    { codigo: "INC-01", usuariosAfetados: 120, confirmado: true },
    { codigo: "INC-02", usuariosAfetados: 45, confirmado: false },
    { codigo: "INC-03", usuariosAfetados: 300, confirmado: true },
    { codigo: "INC-04", usuariosAfetados: 80, confirmado: true },
    { codigo: "INC-05", usuariosAfetados: 60, confirmado: false }
];

let totalUsuariosAfetados = incidentes.reduce(function (acumulador, incidente) {
    if (incidente.confirmado) {
        return acumulador + incidente.usuariosAfetados;
    }

    return acumulador;
}, 0);

console.log("Total de usuários afetados:", totalUsuariosAfetados);