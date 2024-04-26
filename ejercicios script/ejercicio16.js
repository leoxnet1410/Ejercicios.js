//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

function capitalizar(str) {
    // Verificar si el string es vacío
    if (str === '') {
        return ''; // Si es vacio retorna el mismo string vacío
    }

    // esto obtiene la primera  letra en mayúscula   y el resto del string  en minúsculas

    ///me sirve para obtener el lugar especifico  de un carácter dentro de una cadena ( str.charAt ) 
    // esto sirve para convertir todos los caracteres de una cadena a letras mayúsculas (toUpperCase)
    // esto sirve para decirle de que altura comenzara str.slice()

    const primeraLetraMayuscula = str.charAt(0).toUpperCase();
    const restoDelString = str.slice(1);

    // Combinar la primera letra capitalizada con el resto del string
    const stringCapitalizado = primeraLetraMayuscula + restoDelString;

    return stringCapitalizado; // Retornar el string capitalizado
}


const texto = 'hola, mundo!';
const textoCapitalizado = capitalizar(texto);
console.log(textoCapitalizado); 
