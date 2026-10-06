let usuarios = [
    { id: 10, email: "ana@email.com", status: "Ativo" },
    { id: 11, email: "carlos@email.com", status: "Ativo" },
    { id: 12, email: "mariana@email.com", status: "Inativo" },
    { id: 13, email: "lucas@email.com", status: "Ativo" }
];

//Email do novo cadastro
let novoEmail = "mariana@email.com";


//Localizando a posição de um cadastro existente.
let indiceUsuario = usuarios.findIndex((usuario) => {
    return usuario.email === novoEmail
})

//Verificando se o email está cadastrado ou não e exibindo sua posição.
if (indiceUsuario !== -1) {
    console.log("Email ja cadastrado.");
    console.log(`Posição: ${indiceUsuario}`);
}
else { 
    console.log('O email ainda não está cadastrado.');
}