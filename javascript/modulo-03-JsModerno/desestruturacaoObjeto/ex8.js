//Dados de uma autenticação
const sessao = {
    token: "abc123xyz",
    usuarioId: "USR-9281",
    nome: "Gabriel Souza",
    email: "gabriel@empresa.com",
    perfil: "Desenvolvedor",
    ultimoLogin: "2026-10-02 18:42",
    status: "Autenticado"
};


//Desestruturando o obj chamado pegando somente os dados: {nome, email, perfil, status}
const {nome, email, perfil, status} = sessao



//Exibindo os dados obtidos
console.log(`Nome: ${nome}`);
console.log(`Email: ${email}`);
console.log(`Perfil: ${perfil}`);
console.log(`Status: ${status}`);

