let catalogo = [
    {
        codigo: "PR-01",
        nome: "Notebook",
        preco: 4500,
        especificacoes: {
            memoria: "16 GB",
            armazenamento: "512 GB"
        }
    },
    {
        codigo: "PR-02",
        nome: "Monitor",
        preco: 1200,
        especificacoes: {
            tamanho: "27 polegadas",
            resolucao: "4K"
        }
    },
    {
        codigo: "PR-03",
        nome: "Teclado",
        preco: 350,
        especificacoes: {
            layout: "ABNT2",
            conexao: "USB"
        }
    }
];

let codigoAtualizado = "PR-02";
let novoPreco = 1350;

let novoCatalogo = catalogo.map(produto => {
    if (produto.codigo === codigoAtualizado) {
        return {
            ...produto,
            preco: novoPreco
        }
    }
})

console.log('Catálogo original:', catalogo)

console.log(
    'Catálogo atualizado:', novoCatalogo
);
