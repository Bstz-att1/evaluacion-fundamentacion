const buscarElemento = (lista, elemento) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            console.log(`El elemento "${elemento}" fue encontrado en la lista.`);
            return true;
        }
    }
    console.log(`El elemento "${elemento}" no fue encontrado en la lista.`);
    return false;
};

export { buscarElemento };
