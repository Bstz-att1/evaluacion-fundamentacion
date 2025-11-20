const buscarElemento = (lista, elemento) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            console.log(`El elemento "${elemento}" si fue encontrado en la lista, ya puedes realizar la compra del elemento.`);
            return true;
        }
    }
    console.log(`Lo lamentamos. El elemento "${elemento}" no fue encontrado en la lista, por favor busca otro articulo.`);
    return false;
};

export { buscarElemento };
