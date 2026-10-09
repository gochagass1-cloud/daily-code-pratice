//lista de usuários.
let usuarios = [
    {
        id: 1,
        nome: "Ana",
        perfil: "Administrador",
        status: "Ativo",
        emailVerificado: true
    },
    {
        id: 2,
        nome: "Carlos",
        perfil: "Usuário",
        status: "Inativo",
        emailVerificado: true
    },
    {
        id: 3,
        nome: "Mariana",
        perfil: "Gerente",
        status: "Ativo",
        emailVerificado: false
    },
    {
        id: 4,
        nome: "Lucas",
        perfil: "Usuário",
        status: "Ativo",
        emailVerificado: true
    }
];



//id do usuário que vai ser buscado.
let idUsuario = 3;


//Buscando o usuário com id requisitado.
const usuarioLocaizado = usuarios.find((usuario) => {
    return usuario.id === idUsuario
})


//Verificando se o usuário não existe
if (!usuarioLocaizado) {
    console.log("Não foi possível localizar um usuário. Usuário inexistente.");
}
//Verificando se o status e email verificado for diferente do requisitado, notificar que foi localizado mas não pode ser atualizado.
else if (usuarioLocaizado.status !== "Ativo" || usuarioLocaizado.emailVerificado !== true) {
    console.log("Usuário localizado e existente, mas não pode ser alterado.");
}
//Verificando se o usuário existe, atualizando seu perfil caso exista e exibindo suas informações.
else {
    usuarioLocaizado.perfil = "Usuário Premium"

    console.log("Usuário atualizado:");
    console.log(`ID: ${usuarioLocaizado.id}`);
    console.log(`Nome: ${usuarioLocaizado.nome}`);
    console.log(`Perfil: ${usuarioLocaizado.perfil}`);
    console.log(`Status: ${usuarioLocaizado.status}`);
    console.log(`Email verificado: ${usuarioLocaizado.emailVerificado}`);
}