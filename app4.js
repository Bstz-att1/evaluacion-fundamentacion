import {generarTabla} from "./modulos4/index4.js";

function solicitarTabla() {
    const numero = parseInt(prompt("Ingrese el número para la tabla de multiplicar:"));
    const tabla = generarTabla(numero);
    console.log(`Tabla de multiplicar del ${numero}:`, tabla);
}

solicitarTabla();