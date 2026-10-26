let perfilBase = {
    nome: "Analista",
    permissoes: {
        leitura: true,
        escrita: false,
        exclusao: false
    },
    modulos: [
        {
            nome: "Relatorios",
            acoes: ["visualizar", "exportar"]
        },
        {
            nome: "Usuarios",
            acoes: ["visualizar"]
        }
    ]
};

let novoPerfil = "Analista Financeiro";


const perfil1 = structuredClone(perfilBase)

perfil1.nome = novoPerfil
perfil1.modulos[0].acoes.push("aprovar")
perfil1.permissoes.escrita = true



console.log("Perfil base:", perfilBase);
console.log("Perfil independente:", perfil1);