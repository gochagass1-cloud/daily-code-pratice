let estadoSalvo = {
    usuario: {
        nome: "Carlos",
        preferencias: {
            tema: "escuro",
            idioma: "pt-BR"
        }
    },
    privacidade: {
        perfilPublico: false,
        camposVisiveis: ["nome", "foto"]
    },
    dispositivos: [
        {
            tipo: "celular",
            configuracao: {
                notificacoes: true
            }
        }
    ]
};


let estadoAtualizado = structuredClone(estadoSalvo)

estadoAtualizado.usuario.preferencias.tema = "claro"
estadoAtualizado.privacidade.camposVisiveis.push("cidade")
estadoAtualizado.dispositivos[0].notificacoes = false


console.log('Estado salvo:', JSON.stringify(estadoSalvo, null, 2));

console.log(
    'Estado atualizado:',
    JSON.stringify(estadoAtualizado, null, 2)
);