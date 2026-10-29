
function calcularTaxa(valor, taxaPercentual) {
    return valor * (taxaPercentual / 100);
}

function calcularValorFinal(valor, taxa, desconto) {
    return valor + taxa - desconto;
}

export {
    calcularTaxa,
    calcularValorFinal
};
