//Auditoria de segurança
let usuarios = ["Ana", "Carlos", "Mariana", "Lucas", "Pedro", "João"]
let usuarioProcurado = 'Pedro'

let analisados = 0
let encontrado = false

for (const usuario of usuarios) {

    if (usuario === usuarioProcurado) {
        console.log(`Usuário encontrado: ${usuario}`);
        encontrado = true
        break
    }
    console.log(usuario);
    analisados++
}

console.log('Auditoria encerrada.');
console.log(`Foram analisados ${analisados} usuarios até encontrar o usuário.`);

if (encontrado === false) {
    console.log('Usuario não foi encontrado.');
}

