let entregas = [
    {
        id: "ENT-01",
        status: "Em trânsito",
        destino: {
            cidade: "Santos",
            endereco: {
                rua: "Rua A",
                numero: 120
            }
        },
        eventos: ["Coletado", "Saiu para entrega"]
    },
    {
        id: "ENT-02",
        status: "Pendente",
        destino: {
            cidade: "Guarulhos",
            endereco: {
                rua: "Rua B",
                numero: 45
            }
        },
        eventos: ["Pedido recebido"]
    }
];


let copiaHistorico = structuredClone(entregas)

copiaHistorico[0].destino.endereco = {
    rua: "Rua benedito de barros",
    numero: 32
}
copiaHistorico[1].eventos.push("Entrega reprogramada")
copiaHistorico[0].status = "Entregue"





console.log('Entregas:', JSON.stringify(entregas, null, 2));

console.log(
    'Entregas atualizadas:',
    JSON.stringify(copiaHistorico, null, 2)
);