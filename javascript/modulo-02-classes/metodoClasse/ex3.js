//Classe cliente
class Cliente {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
    }

    mostrarDados() {
        console.log(`
            Nome do cliente: ${this.nome}
            Email do cliente: ${this.email}
            `);
    }
}

//Instancia da classe
let cliente1 = new Cliente('Gabriel', 'ochagass01@gmail.com')
let cliente2 = new Cliente('Miguel', 'miguelchagas@gmail.com')
let cliente3 = new Cliente('Gustavo', 'gustavobatista@gmail.com')

cliente1.mostrarDados()
cliente2.mostrarDados()
cliente3.mostrarDados()