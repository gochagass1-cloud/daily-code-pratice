
function calcularReposicao(quantidade, minimo) {
    if (quantidade >= minimo) {
        return 0;
    }

    return minimo - quantidade;
}

export { calcularReposicao };
