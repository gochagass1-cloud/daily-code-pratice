//Cadastro de cliente
class Cliente {
    constructor(nome, email, telefone) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}

const cliente1 = new Cliente('Gabriel', 'ochagass01@gmail.com', '11986985940')
const cliente2 = new Cliente('Miguel', 'miguelchagas01@gmail.com', '11992068353')

console.log(cliente1);
console.log(cliente2);
