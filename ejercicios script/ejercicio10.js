//Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). //La función debe retornar el número 
//de veces que aparece el caracter en el string.


function numeroDeCaracteres(str, caracter) {
    let count = 0;
    str = str.toLowerCase(); // Convertir str a minúsculas para considerar todas las ocurrencias
    caracter = caracter.toLowerCase(); // Convertir caracter a minúsculas para considerar el caso

    // Iterar sobre cada carácter en el string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            count++;  // Incrementar el contador si el carácter actual es igual al caracter buscado
        }
    }

    return count;  // Devolver el número de veces que aparece el caracter en el string
}

// Ejemplos de uso de la función
console.log(numeroDeCaracteres("Hola Mundo", "o"));  
console.log(numeroDeCaracteres("MMMMM", "m"));      
console.log(numeroDeCaracteres("eeee", "e"));   