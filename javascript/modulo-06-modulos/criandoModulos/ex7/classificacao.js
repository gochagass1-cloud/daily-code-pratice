
function classificacaoIncidente(tempoMinutos) {
    if (tempoMinutos <= 15) {
        return "Dentro do prazo"
    } else if(tempoMinutos >= 16 && tempoMinutos <= 30) {
        return "Atenção"
    } else{
        return "Fora do prazo"
    }
}


export { classificacaoIncidente }