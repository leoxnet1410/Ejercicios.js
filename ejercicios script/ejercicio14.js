//Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de 
//todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

//Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

// Definimos una función llamada sumarArreglo
function sumarArreglo(arreglo, inicio, fin) {
    // esto guardara la suma 
    let suma = 0;

   
    for (let i = inicio; i <= fin; i++) {
        // Sumamos el número en la posición 'i' al total 'suma'
        suma += arreglo[i];
    }

   
    return suma;
}


const miArreglo = [2, 4, 6, 8, 10, 12];
const inicio = 1;
const fin = 3;
const resultado = sumarArreglo(miArreglo, inicio, fin);
console.log(resultado); // Output esperado: 28 (4 + 6 + 8 + 10)