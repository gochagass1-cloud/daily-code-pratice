//Lista de usuários
let usuarios = [
    { nome: "Ana", ativo: true, mfa: true, perfil: "Analista" },
    { nome: "Carlos", ativo: true, mfa: true, perfil: "Administrador" },
    { nome: "Mariana", ativo: true, mfa: false, perfil: "Analista" },
    { nome: "Lucas", ativo: false, mfa: true, perfil: "Auditor" }
];


//Validação se todo grupo tem acesso liberado conforme os critérios fornecidos.
const grupoLiberado = usuarios.every((usuario) => {
    return usuario.ativo === true
    && usuario.perfil === "Analista" || usuario.perfil === "Auditor"
    && usuario.mfa === true
})

//Exibindo se o grupo está autorizado ou não.
console.log(`Grupo autorizado: ${grupoLiberado}`);

//Verificando se o acesso foi liberado ao grupo todo ou se foi bloqueado.
if (grupoLiberado) {
    console.log("Acesso liberado: O grupo inteiro atende à política de liberação de acesso.");
} else {
    console.log("Acesso bloqueado: Nem todos do grupo atendem à política de liberação de acesso.");
}