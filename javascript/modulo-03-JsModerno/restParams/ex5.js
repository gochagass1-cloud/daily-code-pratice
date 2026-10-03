function configurarPerfil(perfil, ...permissoes) {
    console.log(`Perfil: ${perfil}`);
    console.log(`Permissões: ${permissoes}`);
}


configurarPerfil(
    "Administrador",
    "Criar usuários",
    "Editar usuários",
    "Excluir usuários",
    "Visualizar relatórios"
);