
import { calcularReposicao } from "./reposicao.js";

const produtos = [
    { codigo: "EST-01", nome: "Cabo USB", quantidade: 12, minimo: 20 },
    { codigo: "EST-02", nome: "Adaptador", quantidade: 35, minimo: 25 },
    { codigo: "EST-03", nome: "Fonte", quantidade: 4, minimo: 15 }
];

for (const produto of produtos) {
    const quantidadeReposicao = calcularReposicao(
        produto.quantidade,
        produto.minimo
    );

    console.log(
        `${produto.codigo} - ${produto.nome}: ` +
        `Repor ${quantidadeReposicao} unidades.`
    );
}
