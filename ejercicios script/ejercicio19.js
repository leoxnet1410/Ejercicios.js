///Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

//Nota: Intentarlo hacer sin el método Math.min de JavaScript.

function min(arreglo) {
    // Verificamos si el arreglo está vacío
    if (arreglo.length === 0) {
        return undefined; // Si está vacío, retornamos undefined
    }

    let minimo = arreglo[0]; // Inicializamos minimo con el primer elemento del arreglo

    // Itera sobre los elementos restantes del arreglo
    for (let i = 1; i < arreglo.length; i++) {
        // Si se encuentra  un numero menor que minimo, actualiza minimo
        if (arreglo[i] < minimo) { 
            minimo = arreglo[i];
        }
    }

    return minimo; 
}

// Ejemplo de uso:
const numeros = [5, 12, 3, 8, 9];
const numeroMinimo = min(numeros);
console.log(numeroMinimo); // Output esperado: 3
