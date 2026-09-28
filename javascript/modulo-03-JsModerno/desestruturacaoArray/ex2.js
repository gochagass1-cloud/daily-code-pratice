//Modulo autenticacao
const sessao = [
    "USR-8291",
    "Carlos Mendes",
    "Administrador",
    true
];

//Desestruturando e obtendo somente as info necessárias para tela inicial do sistema
const [, nomeUser, acessoPerfil ] = sessao

//exibindo os dados
console.log(`Usuário: ${nomeUser}`);
console.log(`Perfil: ${acessoPerfil}`);
