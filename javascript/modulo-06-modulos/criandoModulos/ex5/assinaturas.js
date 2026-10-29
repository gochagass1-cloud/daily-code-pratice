

function totalMensalAssinatura(valorBase, usuarios, limite, adicional) {
    if (usuarios > limite) {
        const userLimiteFinal = usuarios - limite
        return (valorBase * usuarios) + adicional * userLimiteFinal
    }

    return valorBase * usuarios
}


export { totalMensalAssinatura }