export const validarAcceso = function(edad, contrasena) {
    const edadMinima = 18;
    const contrasenaCorrecta = "pepeccion24"; // Contraseña válida para comparación exacta

    if (edad >= edadMinima && contrasena === contrasenaCorrecta) {
        return "Acceso concedido";
    } else {
        return "Acceso denegado";
    }
};
