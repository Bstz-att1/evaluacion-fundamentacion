// Función declarada para calcular el impuesto unitario de un producto
function calcularImpuestoUnitario(valor, porcentaje) {
    return valor * (porcentaje / 100);
}

// Función expresada para procesar los impuestos de múltiples productos
const procesarImpuestos = function() {
    // Solicitar la cantidad de productos
    const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos:"));

    let totalImpuesto = 0;

    // Usar un ciclo para iterar sobre cada producto
    for (let i = 0; i < cantidadProductos; i++) {
        // Solicitar el valor del producto
        const valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}:`));

        // Solicitar el porcentaje de impuesto
        const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i + 1}:`));

        // Calcular el impuesto unitario y acumular
        const impuestoUnitario = calcularImpuestoUnitario(valor, porcentaje);
        totalImpuesto += impuestoUnitario;
    }

    // Retornar el total final
    return totalImpuesto;
};

// Exportar las funciones para uso en otros módulos
export { calcularImpuestoUnitario, procesarImpuestos };
