// Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
function numAsteriscos(matriz) {
    // Paso 2: Inicializar un contador en 0
    var contador = 0;

    // Paso 3: Iterar sobre cada fila en la matriz
    for (var i = 0; i < matriz.length; i++) {
        var fila = matriz[i];

        // Paso 4: Iterar sobre cada elemento en la fila actual
        for (var j = 0; j < fila.length; j++) {
            var elemento = fila[j];

            // Paso 5: Verificar si el elemento es una cadena de texto
            if (typeof elemento === 'string') {
                // Paso 6: Contar los asteriscos en la cadena
                contador += (elemento.match(/\*/g) || []).length;
            }
        }
    }

    return contador;
}


var miMatriz = [
    ["Hola", "*", "Mundo"],
    ["*", "Copilot*", "Asteriscos***"],
    ["No", "hay", "asteriscos"]
];

var cantidadAsteriscos = numAsteriscos(miMatriz);

console.log(cantidadAsteriscos);
