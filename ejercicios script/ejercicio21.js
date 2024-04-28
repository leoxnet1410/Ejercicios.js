//Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

function pares(arreglo) {
    // Filtro los números pares del arreglo utilizando el método filter
    var numerosPares = arreglo.filter(function(numero) {
        return numero % 2 === 0; // Compruebo  si el número es par
    });
    return numerosPares; 
}

var arregloOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arregloPares = pares(arregloOriginal);
console.log(arregloPares); 