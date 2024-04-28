//Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

function duplicar(arreglo) {
    var arregloDuplicado = []; 
    
    // Iterar sobre el arreglo original
    for (var i = 0; i < arreglo.length; i++) {    //si
        var numeroDuplicado = arreglo[i] * 2; // multiplicar cada numero por 2 
        arregloDuplicado.push(numeroDuplicado); // se agrega el numero multiplicado al arreglo
    }
    
    return arregloDuplicado; 
}


var arregloOriginal = [1, 2, 3, 4, 5];
var arregloDuplicado = duplicar(arregloOriginal);
console.log(arregloDuplicado); 