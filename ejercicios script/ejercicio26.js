///Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

function imprimirMatriz(matriz) {
    // Iteramos sobre cada fila de la matriz
    for (var i = 0; i < matriz.length; i++) {
        // Iteramos sobre cada elemento de la fila actual
        for (var j = 0; j < matriz[i].length; j++) {
           
            console.log(matriz[i][j]);
        }
    }
}


var miMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimirMatriz(miMatriz);