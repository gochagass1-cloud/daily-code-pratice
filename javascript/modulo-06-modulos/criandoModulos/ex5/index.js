import {totalMensalAssinatura} from "./assinaturas.js"

const assinaturas = [
    { cliente: "Alfa", valorBase: 99, usuarios: 5, limite: 5, adicional: 12 },
    { cliente: "Beta", valorBase: 149, usuarios: 8, limite: 5, adicional: 10 },
    { cliente: "Gama", valorBase: 79, usuarios: 3, limite: 3, adicional: 15 }
];


for (const assinatura of assinaturas) {
    const resultValor = totalMensalAssinatura(
        assinatura.valorBase,
        assinatura.usuarios,
        assinatura.limite,
        assinatura.adicional
    )

    console.log(`Cliente: ${assinatura.cliente} Valor mensal: R$${resultValor}`);
}