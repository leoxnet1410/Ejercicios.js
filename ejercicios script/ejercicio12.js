//Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne 
//la multiplicación de todos los elementos.


function multiplicarArreglo(arreglo) {
    // Verificar si el arreglo está vacío
    if (arreglo.length === 0) {
        return 0;  // Si el arreglo está vacío, retornar 0 (producto de arreglo vacío es 0)
    }

    let producto = 1;

    // Iterar sobre cada elemento del arreglo
    for (let i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i];  // tiene que  multiplicar cada elemento al producto acumulado
    }

    return producto;  
}

// Ejemplo de uso de la función
const numeros1 = [1, 2, 3, 4, 5];
console.log(multiplicarArreglo(numeros1));  

const numeros2 = [2, 3, 4];
console.log(multiplicarArreglo(numeros2));  

const numeros3 = [];  
console.log(multiplicarArreglo(numeros3));