import { calcularPromedio } from "./modulos2/index2.js";

function solicitarDatos() {
    const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
    const notas = [];
    for (let i = 0; i < cantidadNotas; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
        notas.push(nota);
    }
    const resultado = calcularPromedio(notas);
    console.log(`Promedio: ${resultado.promedio.toFixed(2)}`);
    console.log(`Rendimiento: ${resultado.rendimiento}`);
}

solicitarDatos();