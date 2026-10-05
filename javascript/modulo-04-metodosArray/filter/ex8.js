//Lista de usuários
let usuarios = [
    { id: 1, nome: "Ana", perfil: "Administrador", status: "Ativo" },
    { id: 2, nome: "Carlos", perfil: "Usuário", status: "Inativo" },
    { id: 3, nome: "Mariana", perfil: "Gerente", status: "Ativo" },
    { id: 4, nome: "Lucas", perfil: "Usuário", status: "Inativo" }
];

let usuariosInativos = usuarios.filter((usuario) => {
    return usuario.status === "Inativo";
})

console.log(usuariosInativos);