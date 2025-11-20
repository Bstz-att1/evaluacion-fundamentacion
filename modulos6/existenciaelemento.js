// Función flecha que busca un elemento específico en una lista (arreglo)
// Parámetros: lista (arreglo de elementos), elemento (el elemento a buscar)
// Retorna: true si el elemento se encuentra, false si no
const buscarElemento = (lista, elemento) => {
    // Bucle for que recorre cada elemento de la lista
    for (let i = 0; i < lista.length; i++) {
        // Verifica si el elemento actual en la lista es igual al elemento buscado
        if (lista[i] === elemento) {
            // Si se encuentra, imprime un mensaje de éxito en la consola
            console.log(`El elemento "${elemento}" si fue encontrado en la lista, ya puedes realizar la compra del elemento.`);
            // Retorna true para indicar que el elemento existe
            return true;
        }
    }
    // Si el bucle termina sin encontrar el elemento, imprime un mensaje de no encontrado
    console.log(`Lo lamentamos. El elemento "${elemento}" no fue encontrado en la lista, por favor busca otro articulo.`);
    // Retorna false para indicar que el elemento no existe
    return false;
};

// Exporta la función buscarElemento para que pueda ser importada en otros módulos
export { buscarElemento };
