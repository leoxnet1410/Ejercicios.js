//Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

//Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

function contarRango(num1, num2) {
    let contador = 0;  // Inicializa el contador de números entre num1 y num2

    // Inicia el ciclo desde num1 + 1 hasta num2 - 1
    for (let i = num1 + 1; i < num2; i++) {
        contador++;  // Incrementa el contador por cada número en el rango
    }

    return contador;  
}

console.log(contarRango(5, 10));  
console.log(contarRango(2, 12)); 