//Dados serviço externo de entrega
const respostaEntrega = {
    codigoRastreio: "BR123456789",
    pedido: "PED-8821",
    destinatario: "Mariana Costa",
    endereco: "Rua das Flores, 120",
    cidade: "São Paulo",
    estado: "SP",
    transportadora: "ExpressLog",
    status: "Em trânsito",
    previsaoEntrega: "2026-10-05"
};


//Desestruturando o obj respostaEntrega pegando somente os dados: {codigoRastreio, pedido, destinatario, cidade, estado, transportadora, status}
const {codigoRastreio, pedido, destinatario, cidade, estado, transportadora, status} = respostaEntrega


//Exibindo os dados obtidos
console.log(`Cóidigo: ${codigoRastreio}`);
console.log(`Pedido: ${pedido}`);
console.log(`Destinatário: ${destinatario}`);
console.log(`Cidade: ${cidade}`);
console.log(`Estado: ${estado}`);
console.log(`Transportadora: ${transportadora}`);
console.log(`Status: ${status}`);


