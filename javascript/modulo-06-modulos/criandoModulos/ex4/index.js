import {calculoCustoEntrega} from "./entregas.js"

const entregas = [
    { codigo: "ENT-201", distanciaKm: 12, valorKm: 2.5 },
    { codigo: "ENT-202", distanciaKm: 48, valorKm: 1.8 },
    { codigo: "ENT-203", distanciaKm: 7, valorKm: 3.2 }
];


for (const entrega of entregas) {
    const custoFinal = calculoCustoEntrega(
        entrega.distanciaKm,
        entrega.valorKm
    )

    console.log(`Código da entrega: ${entrega.codigo} Custo calculado: ${custoFinal.toFixed(2)}`);
}

