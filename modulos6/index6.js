// Importa la función existeElemento desde el módulo existenciaelemento.js
import { existeElemento } from "./existenciaelemento.js";

// Función exportada que busca un elemento en un arreglo y muestra un mensaje según si existe o no
export function buscarElemento(array, elemento) {
    // Llama a la función existeElemento para verificar si el elemento está en el arreglo
    const existe = existeElemento(array, elemento);
    // Si el elemento existe, imprime un mensaje positivo
    if (existe) {
        console.log(`El elemento "${elemento}" existe en la lista.`);
    } else {
        // Si no existe, imprime un mensaje negativo
        console.log(`El elemento "${elemento}" no existe en la lista.`);
    }
}
