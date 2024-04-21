///Escribir una función llamada imprimirArreglo que reciba un arreglo e 
//imprima cada elemento en una línea a parte


function imprimirArreglo(arreglo) {
    
    for (let elemento of arreglo) { //  Esta linea es Para cada elemento en el arreglo
        console.log(elemento);
    }
}

imprimirArreglo([3, "estoy", 4, "funcionando"]);