// Importa la función buscarElemento desde el módulo index6.js en la carpeta modulos6
import { buscarElemento } from "./modulos6/index6.js";

// Función principal que solicita al usuario la cantidad de elementos, los ingresa en una lista y busca un elemento específico
function solicitarBusqueda() {
    // Solicita al usuario la cantidad de elementos y la convierte a entero
    const cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos:"));
    // Inicializa un arreglo vacío para almacenar los elementos
    const lista = [];
    // Bucle para ingresar cada elemento en la lista
    for (let i = 0; i < cantidadElementos; i++) {
        // Solicita el elemento i+1 al usuario
        const elemento = prompt(`Ingrese el elemento ${i + 1}:`);
        // Agrega el elemento al arreglo lista
        lista.push(elemento);
    }
    // Imprime la lista completa en la consola para verificación
    console.log("Lista de elementos:", lista);
    // Solicita el elemento a buscar
    const elementoBuscar = prompt("Ingrese el elemento a buscar:");
    // Llama a la función buscarElemento con la lista y el elemento a buscar
    buscarElemento(lista, elementoBuscar);
}

// Llama a la función solicitarBusqueda para iniciar el proceso
solicitarBusqueda();
