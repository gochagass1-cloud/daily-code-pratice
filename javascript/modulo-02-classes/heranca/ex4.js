//Criando classe Cliente
class Cliente {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
    }
}


//Criando classe ClientePremium que herda da classe Cliente
class ClientePremium extends Cliente {
    constructor(nome, email, nivel) {
        super(nome, email)
        this.nivel = nivel
    }

}

//Criando clientePremium
const clientePremium = new ClientePremium('Gabriel', 'ochagass01@gmail.com', 'Diamante')
clientePremium.mostrarDados()
console.log(`Nivel: ${clientePremium.nivel}`);