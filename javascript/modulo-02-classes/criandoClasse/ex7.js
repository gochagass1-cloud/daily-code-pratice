//Sistema de usuários
class Usuario {
    constructor(nome, email, perfil) {
        this.nome = nome
        this.email = email
        this.perfil = perfil
    }
}

const usuario1 = new Usuario('Ana', 'ana@gmail.com', 'Administrador')
const usuario2 = new Usuario('Carlos', 'carlos@gmail.com', 'Funcionario')
const usuario3 = new Usuario('Mariana', 'mariana@gmail.com', 'Gerente')
const usuario4 = new Usuario('Lucas', 'lucas@gmail.com', 'Funcionario')

let usuarios = [usuario1, usuario2, usuario3, usuario4]

for (const usuario of usuarios) {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Perfil: ${usuario.perfil}`);
    console.log("----------------");
}