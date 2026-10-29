import {classificacaoIncidente} from "./classificacao.js"

const incidentes = [
    { id: "INC-101", tempoMinutos: 8 },
    { id: "INC-102", tempoMinutos: 42 },
    { id: "INC-103", tempoMinutos: 19 },
    { id: "INC-104", tempoMinutos: 65 }
];


for (const incidente of incidentes) {
    const classificacaoFinal = classificacaoIncidente(
        incidente.tempoMinutos
    )

    console.log(`ID: ${incidente.id}`);
    console.log(`Classificação: ${classificacaoFinal}`);
}