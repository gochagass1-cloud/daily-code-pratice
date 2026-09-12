//Controle de acesso
const permissoes = ["visualizar", "editar", "relatorios", "excluir"]

for (const permissao of permissoes) {
    console.log(`Permissão: ${permissao}`);

    if (permissao.includes('excluir')) {
        console.log(`O usuário possui acesso a permissão ${permissao}`);
    }
}