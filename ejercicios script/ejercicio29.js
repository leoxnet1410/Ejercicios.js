// Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos
function numAsteriscos(matriz) {
   
    var contador = 0;

    for (var i = 0; i < matriz.length; i++) {
        var fila = matriz[i];

        // Paso 4: Iterar sobre cada elemento en la fila actual
        for (var j = 0; j < fila.length; j++) {
            var elemento = fila[j];

           // Verifico si el elemento es una cadena de texto
            if (typeof elemento === 'string') {
               
                contador += (elemento.match(/\*/g) || []).length; //busca todos los asteriscos (*) en una cadena de texto llamada elemento

                                                        
            }
        }
    }

  
    return contador;
}

var miMatriz = [
    ["Hola", "*", "epale"],
    ["*", "asteriscos*", "Asteriscos*********"],
    ["No", "hay", "asteriscos"]
];

var cantidadAsteriscos = numAsteriscos(miMatriz);

console.log( cantidadAsteriscos);

