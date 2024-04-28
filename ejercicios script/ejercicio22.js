////Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.


function posiciones(arreglo) {
    var posicionesPares = []; 
    
    // Iteramos sobre el arreglo para encontrar las posiciones de los numeros pares
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) { // Verificamos si el número en la posición actual es par
            posicionesPares.push(i); // Agregamos la posición al arreglo de posiciones pares
        }
    }
    
    return posicionesPares; 
}

var arregloOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var posicionesPares = posiciones(arregloOriginal);
console.log(posicionesPares); 