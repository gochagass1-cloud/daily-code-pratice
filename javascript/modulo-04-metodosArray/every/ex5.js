let clientesImportados = [
    { id: 201, nome: "Ana Souza", email: "ana@empresa.com", status: "Ativo" },
    { id: 202, nome: "Carlos Lima", email: "carlos@empresa.com", status: "Ativo" },
    { id: 203, nome: "Mariana", email: "", status: "Ativo" },
    { id: 204, nome: "Lucas Rocha", email: "lucas@empresa.com", status: "Bloqueado" }
];


const registroAprovado = clientesImportados.every((cliente) => {
    return cliente.id > 0
    && typeof cliente.nome === "string"
    && cliente.nome.trim() !== ""
    && typeof cliente.email === "string"
    && cliente.email.trim() !== ""
    && cliente.status === "Ativo"
})

console.log("Importação válida:", importacaoValida);

if (importacaoValida) {
    console.log("Importação autorizada: todos os clientes possuem dados válidos.");
} else {
    console.log("Importação bloqueada: existem registros com dados inválidos.");
}