///Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
// Definimos una función llamada removerCeros que toma un arreglo como argumento

function removerCeros(arr) {
    // esto almacena los numero diferentes a cero
    let resultado = [];

    // Iteramos sobre cada elemento del arreglo recibido
    for (let i = 0; i < arr.length; i++) {
        // Verificamos si el elemento actual no es cero
        if (arr[i] !== 0) {
            // Si el elemento no es cero  lo agregamos al arreglo resultado
            resultado.push(arr[i]);
        }
    }

   
    return resultado;
}


const arregloOri = [1, 0, 0,0,9, 0, 2, 0, 7];

const arregloFiltrado = removerCeros(arregloOri);

console.log(arregloFiltrado);