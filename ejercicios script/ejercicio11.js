//Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

function sumarArreglo(arreglo) {
    let suma = 0;

    // Iterar sobre cada elemento del arreglo
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];  // tiene que sumar cada elemento al total
    }

    return suma; 
}

// Ejemplo de uso de la función
const numeros1 = [1, 2, 3, 4, 5];
console.log(sumarArreglo(numeros1));  

const numeros2 = [10, 20, 30];
console.log(sumarArreglo(numeros2));  

const numeros3 = [];  
console.log(sumarArreglo(numeros3));