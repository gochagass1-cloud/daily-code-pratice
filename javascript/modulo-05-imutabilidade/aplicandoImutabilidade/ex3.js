let usuariosAutorizados = [
    { id: 201, nome: "Ana", perfil: "Analista" },
    { id: 202, nome: "Carlos", perfil: "Auditor" },
    { id: 203, nome: "Mariana", perfil: "Analista" },
    { id: 204, nome: "Lucas", perfil: "Administrador" }
];

let idRevogado = 202;


let usuariosAtualizados = usuariosAutorizados.filter(user => user.id !== idRevogado)

console.log("Lista original:", usuariosAutorizados);
console.log("Lista atualizada:", usuariosAtualizados);