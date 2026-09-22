//Criando class
class Relatorio {
    
    static inicio() {
        console.log('==== INÍCIO DO RELATÓRIO ====');
    }

    static finalizar() {
        console.log('==== FIM DO RELATÓRIO ====');
    }
}

Relatorio.inicio()

console.log('Funcionario: Gabriel')
console.log('Setor: TI')
console.log('Cargo: Desenvolvedor')

Relatorio.finalizar()