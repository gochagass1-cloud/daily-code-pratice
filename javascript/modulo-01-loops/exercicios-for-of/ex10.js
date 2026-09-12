//Relatório de produtos
let produtos = [
    "Notebook",
    "Mouse",
    "Teclado",
    "Monitor",
    "Headset",
    "Webcam"
];

let quantidade = 0;
let monitorEncontrado = false;
let webcamEncontrada = false;

for (let produto of produtos) {
    console.log("Produto:", produto);

    quantidade++;

    if (produto === "Monitor") {
        monitorEncontrado = true;
    }

    if (produto === "Webcam") {
        webcamEncontrada = true;
    }
}

console.log("Quantidade total de produtos:", quantidade);
console.log("Monitor encontrado:", monitorEncontrado);
console.log("Webcam encontrada:", webcamEncontrada);