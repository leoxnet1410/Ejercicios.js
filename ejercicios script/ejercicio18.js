//Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

//Nota: Intentarlo hacer sin el método Math.max de JavaScript.

function max(arreglo) {
    // Verificamos si el arreglo está vacío
    if (arreglo.length === 0) {
        return undefined; // Si está vacío, retornamos undefined
    }

    let maximo = arreglo[0]; // Inicializamos maximo con el primer elemento del arreglo

    // Iteramos sobre los elementos restantes del arreglo
    for (let i = 1; i < arreglo.length; i++) {
        // si se encuentra un numero mayor que maximo actualiza maximo
        if (arreglo[i] > maximo) { 
            maximo = arreglo[i];
        }
    }

    return maximo; 
}

// Ejemplo de uso:
const numeros = [5, 12, 3, 8, 9];
const numeroMaximo = max(numeros);
console.log(numeroMaximo); 
