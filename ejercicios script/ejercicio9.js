//escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

function numeroDeAes(str) {
    let count = 0;

    // Convertir el string a minúsculas (opcional)
    str = str.toLowerCase();

    // Dividir el string en un array de caracteres
    let chars = str.split('');

    // Iterar sobre cada carácter y tiene que  contar las letras 'a'
    chars.forEach(char => {
        if (char === 'a') {
            count++;
        }
    });

    return count;  
}


console.log(numeroDeAes("aguacate"));  
console.log(numeroDeAes("mama"));       
console.log(numeroDeAes("carnaval"));            