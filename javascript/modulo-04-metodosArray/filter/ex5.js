//Lista de clientes
let clientes = [
    { nome: "Ana", nivel: "VIP", compras: 15 },
    { nome: "Carlos", nivel: "Regular", compras: 8 },
    { nome: "Mariana", nivel: "VIP", compras: 22 },
    { nome: "Lucas", nivel: "Regular", compras: 18 }
];

//Filtrando clientes que estejam de acordo com a politica de desconto da empresa: VIP e pelo menos 10 compras.
const politicaDesconto = clientes.filter((cliente) => cliente.nivel === "VIP" && cliente.compras >= 10)
console.log(politicaDesconto);
