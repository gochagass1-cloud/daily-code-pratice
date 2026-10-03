//Dados do usuario
const usuario = {
    id: "USR-1042",
    nome: "Carlos Mendes",
    email: "carlos@empresa.com",
    perfil: "Administrador",
    status: "Ativo"
};

//Desestruturando e pegando somente {nome, email, perfil} dos dados do usuario.
const {nome, email, perfil} = usuario

console.log(`Nome: ${nome}`);
console.log(`Email: ${email}`);
console.log(`Perfil: ${perfil}`);
