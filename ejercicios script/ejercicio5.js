//Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

//Por ejemplo:

//1400 se convierte en 1K
///34,567 se convierte en 34K
//7’456,345 se convierte en 7M.
//Si el número es menor a 1000 se debe devolver el mismo número como un string.




function likes(numero) {
    // Verifica si el número es menor a 1000
    if (numero < 1000) {
      return numero.toString();  // Retorna el número como string
    } else if (numero < 1000000) {
      // Para números entre 1,000 y 999,999, devuelve en formato 'K'
      return Math.floor(numero / 1000) + "K";
    } else {
      // Para números de 1,000,000 en adelante, devuelve en formato 'M'
      return Math.floor(numero / 1000000) + "M";
    }
  }
  
  
  console.log(likes(1600));       // Debería imprimir '1K'
  console.log(likes(500));        // Debería imprimir '999'