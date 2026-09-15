//Código de acesso
let codigos = ['ABC', 'XYZ', '123', 'ADMIN', 'USER']

for (const codigo of codigos) {
    if (codigo === 'ADMIN') {
        console.log(`Acesso autorizado, código de acesso: ${codigo}`);
        break
    }
    console.log(codigo);
}