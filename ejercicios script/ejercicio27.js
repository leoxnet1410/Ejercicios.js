///escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne 
//un nuevo arreglo convirtiendo cada número a su versión en palabras.
function numerosAPalabras(numeros) {
    const palabras = [
        "cero", "uno", "dos", "tres", "cuatro",
        "cinco", "seis", "siete", "ocho", "nueve"
    ];

    const resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero >= 0 && numero <= 9) {
            resultado.push(palabras[numero]);
        } else {
            resultado.push("Número fuera de rango");
        }
    }

    return resultado;
}

// Ejemplo de uso
const numeros = [1, 5, 9, 11, 7];
const palabrasResultantes = numerosAPalabras(numeros);
console.log(palabrasResultantes);