//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:


function capitalizar(str) {
    // Inicializamos una variable para construir el resultado
    let resultado = '';

    // Itera sobre cada caracter en el string
    for (let i = 0; i < str.length; i++) {
        // Si es el primer carácter del string o está precedido por un espacio
        if (i === 0 || str[i - 1] === ' ') {
            // Capitalizamos el carácter actual y lo concatenamos al resultado
            resultado += str[i].toUpperCase();
        } else {
            // De lo contrario, dejamos el carácter como está y lo concatenamos al resultado
            resultado += str[i];
        }
    }

    return resultado; // Retornar el string con las palabras capitalizadas
}

// Ejemplo de uso:
const texto = 'hola, mundo! cómo estás?';
const textoCapitalizado = capitalizar(texto);
console.log(textoCapitalizado);
// Output esperado: 'Hola, Mundo! Cómo Estás?'