///scribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. 
//La función debe retornar la suma de los números en ese rango (incluyéndolos).

///Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.


function sumarRango(inicio, fin) {
    let suma = 0;

    // Iterar a traves de cada número en el rango (desde 'inicio' hasta  el 'fin')
    for (let num = inicio; num <= fin; num++) {
        suma += num;  // esto agregar el numero actual a la suma
    }

    return suma;  
}

// Ejemplos de uso de la función
console.log(sumarRango(1, 5));   
console.log(sumarRango(3, 7));   
console.log(sumarRango(10, 20)); 