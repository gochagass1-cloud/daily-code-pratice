let perfis = [
    {
        id: 1,
        nome: "Ana",
        preferencias: {
            altoContraste: false,
            notificacoes: true
        }
    },
    {
        id: 2,
        nome: "Carlos",
        preferencias: {
            altoContraste: false,
            notificacoes: false
        }
    },
    {
        id: 3,
        nome: "Mariana",
        preferencias: {
            altoContraste: true,
            notificacoes: true
        }
    }
];

let idUsuario = 2;

let perfisAtualizados = perfis.map(perfil => {
    if (perfil.id === idUsuario) {
        return {
            ...perfil,
            preferencias: {
                ...perfil.preferencias,
                altoContraste: true
            }
        };
    }

    return perfil;
});

console.log("Perfis originais:", perfis);
console.log("Perfis atualizados:", perfisAtualizados);
