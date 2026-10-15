let cadastroAtual = {
    id: 104,
    nome: "Ana Martins",
    cargo: "Desenvolvedora Júnior",
    contato: {
        email: "ana@empresa.com",
        telefone: "11999990000"
    },
    certificacoes: ["JavaScript", "Git"]
};

let alteracoesSolicitadas = {
    cargo: "Desenvolvedora Pleno",
    contato: {
        email: "ana.martins@empresa.com"
    },
    certificacoes: ["JavaScript", "Git", "Node.js"]
};

//criando cópia profunda com DeepCopy
let novoCadastro = structuredClone(cadastroAtual)

novoCadastro.cargo = alteracoesSolicitadas.cargo
novoCadastro.contato.email = alteracoesSolicitadas.contato.email
novoCadastro.certificacoes = alteracoesSolicitadas.certificacoes


console.log("Cadastro atual:", cadastroAtual);
console.log("Cadastro atualizado conforme as solicitações:", novoCadastro);