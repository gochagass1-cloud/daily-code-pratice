let contratoOriginal = {
    id: "CT-900",
    cliente: "Empresa Alfa",
    valor: 15000,
    prazo: 12,
    responsavel: {
        nome: "Mariana Costa",
        email: "mariana@empresa.com"
    }
};

let revisaoContrato = {
    valor: 18000,
    responsavel: {
        email: "mariana.novo@empresa.com"
    }
};

let contratoAtualizado = {
    ...contratoOriginal,
    ...revisaoContrato,
    responsavel: {
        ...contratoOriginal.responsavel,
        ...revisaoContrato.responsavel
    }
};

console.log("Contrato original:", contratoOriginal);
console.log("Contrato atualizado:", contratoAtualizado);

