let configuracoes = {
    idioma: "Português",
    tema: "Escuro",
    notificacoes: true,
    versao: "2.0.1"
};

for (let propriedade in configuracoes) {
    console.log(`Analisando configuração: ${propriedade}`);
    console.log(`Valor: ${configuracoes[propriedade]}`);
}