// Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).
function terminanConS(palabras) {
    // almacenar las palabras que cumplen con la condicion
    var palabras_con_s = [];

    // Iteramos sobre cada palabra en la lista de entrada
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];

        // Verificamos si la palabra termina con 's' o 'S'
        if (palabra.endsWith('s') || palabra.endsWith('S')) {
            // Si sí, la agregamos a la lista de palabras con 's'
            palabras_con_s.push(palabra);
        }
    }

  
    return palabras_con_s;
}

var palabras = ["Hola", "Adiós", "Perros", "Gatos", "Amarillo", "Rojo"];
var resultado = terminanConS(palabras);


console.log(resultado);
