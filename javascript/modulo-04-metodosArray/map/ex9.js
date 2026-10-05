let usuarios = [
    {
        id: 1,
        nome: "Ana",
        email: "ana@email.com",
        perfil: "Administrador",
        status: "Ativo"
    },
    {
        id: 2,
        nome: "Carlos",
        email: "carlos@email.com",
        perfil: "Usuário",
        status: "Ativo"
    },
    {
        id: 3,
        nome: "Mariana",
        email: "mariana@email.com",
        perfil: "Gerente",
        status: "Inativo"
    }
];

let dadosUsersAtualizado = usuarios.map((usuario) => {
    return {
        id: usuario.id,
        nome: usuario.nome,
        perfil: usuario.perfil
    }
})

console.log(dadosUsersAtualizado);