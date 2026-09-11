//Configurações do sistema
let configSistema = {
    idioma: 'Ingles',
    tema: 'Dark',
    notificacoes: 'Ativo',
    versao: '2.1.2'
}

for (const prop in configSistema) {
    console.log(prop);
    console.log(configSistema[prop]);
}