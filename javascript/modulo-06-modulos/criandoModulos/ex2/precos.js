function calcularPromocao(preco, percentual) {
    const calculo = preco * (percentual / 100)
    return preco - calculo
}


export {calcularPromocao}