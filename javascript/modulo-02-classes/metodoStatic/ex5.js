//Criando class
class Usuario {
    
    static verificarIdade(idade) {
        if (idade >= 18) {
            console.log('Usuário maior de idade');
        } else {
            console.log('Usuário menor de idade');
        }
    }
}

Usuario.verificarIdade(17)
Usuario.verificarIdade(19)
Usuario.verificarIdade(68)