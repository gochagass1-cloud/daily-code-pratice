//Dados de um funcionário
const funcionario = {
    id: "FUNC-2098",
    nome: "Carlos Mendes",
    email: "carlos.mendes@empresa.com",
    cargo: "Desenvolvedor Backend",
    setor: "Tecnologia",
    nivel: "Júnior",
    salario: 5200,
    cidade: "São Paulo",
    status: "Ativo",
    dataAdmissao: "2026-01-15"
};


//Desestruturando o obj funcionario pegando somente os dados: {nome, email, cargo, setor, nivel, cidade, status}
const {nome, email, cargo, setor, nivel, cidade, status} = funcionario




//Exibindo os dados obtidos
console.log(`Nome: ${nome}`);
console.log(`Email: ${email}`);
console.log(`Cargo: ${cargo}`);
console.log(`Setor: ${setor}`);
console.log(`Nível: ${nivel}`);
console.log(`Cidade: ${cidade}`);
console.log(`Status: ${status}`);
