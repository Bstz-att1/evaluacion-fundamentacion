import { validarAcceso } from "./modulos3/index3.js";

function solicitarAcceso() {
    const edad = parseInt(prompt("Ingrese su edad:"));
    const contrasena = prompt("Ingrese su contraseña:");
    const mensaje = validarAcceso(edad, contrasena);
    console.log(mensaje);
}

solicitarAcceso();