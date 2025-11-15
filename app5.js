import { procesarImpuestos } from "./modulos5/index5.js";

function importepagar() {
const totalImpuesto = procesarImpuestos();
console.log(`Total de impuestos acumulados: ${totalImpuesto.toFixed(2)}`);
}

importepagar();