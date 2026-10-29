
import { verificarElegibilidade } from "./beneficios.js";

const funcionarios = [
    { id: 1, nome: "Ana", mesesEmpresa: 14 },
    { id: 2, nome: "Bruno", mesesEmpresa: 6 },
    { id: 3, nome: "Carla", mesesEmpresa: 12 },
    { id: 4, nome: "Diego", mesesEmpresa: 23 }
];

for (const funcionario of funcionarios) {
    const elegivel = verificarElegibilidade(funcionario.mesesEmpresa);

    const status = elegivel
        ? "Elegível"
        : "Não elegível";

    console.log(
        `${funcionario.nome}: ${status}`
    );
}
