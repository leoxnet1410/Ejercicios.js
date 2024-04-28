//Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).


function empiezanConA(arreglo) {
    var palabrasConA = []; 
    
    // Iterar sobre el arreglo de strings
    for (var i = 0; i < arreglo.length; i++) {
        var palabra = arreglo[i];
        // Comprobamos si la primera letra de la palabra es "a" o "A"
        if (palabra.charAt(0).toLowerCase() === 'a') {
            palabrasConA.push(palabra); // Agregamos la palabra al arreglo si empieza con "a"
        }
    }
    
    return palabrasConA;
}


var arregloStrings = ["Abeja", "Banana", "Cebra", "Amarillo", "Anillo"];
var palabrasConA = empiezanConA(arregloStrings);
console.log(palabrasConA); 
