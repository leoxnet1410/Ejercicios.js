//escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

//fizz" si el número es múltiplo de 3.
//buzz" si el número es múltiplo de 5.
//fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
//  Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.


function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero;
    }
}

console.log(fizzBuzz(3));    
console.log(fizzBuzz(5));   
console.log(fizzBuzz(2));  
console.log(fizzBuzz(80));    