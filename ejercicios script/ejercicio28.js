
///Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo 
//traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.
function palabrasANumeros(palabras) {
    const numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    const resultado = [];

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i].toLowerCase(); // Convertimos a minúsculas para ser insensible a mayúsculas

        if (numeros.hasOwnProperty(palabra)) {
            resultado.push(numeros[palabra]);
        } else {
            resultado.push(-1);
        }
    }

    return resultado;
}

// Ejemplo de uso
const palabrasEjemplo = ["uno", "cinco", "diez", "tres", "nueve"];
const numerosResultantes = palabrasANumeros(palabrasEjemplo);
console.log(numerosResultantes);