import { buscarElemento } from "./modulos6/index6.js";

function solicitarBusqueda() {
    const cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos:"));
    const lista = [];
    for (let i = 0; i < cantidadElementos; i++) {
        const elemento = prompt(`Ingrese el elemento ${i + 1}:`);
        lista.push(elemento);
    }
    console.log("Lista de elementos:", lista);
    const elementoBuscar = prompt("Ingrese el elemento a buscar:");
    buscarElemento(lista, elementoBuscar);
}

solicitarBusqueda();