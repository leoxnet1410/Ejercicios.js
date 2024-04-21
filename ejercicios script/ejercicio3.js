//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

//El BMI se calcula con la siguiente formula: peso / altura^2

//Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

//"Bajo de peso" si el BMI < 18.5
//"Normal" si está entre 18.5 y 24.9
//"Sobrepeso" si está entre 25 y 29.9
//"Obeso" si es igual o mayor a 30

function bmi(peso, altura) {
    let imc = peso / (altura * altura);
    
    if (imc < 18.5) {
      return "Bajo de peso";
    }
    if (imc < 25) {
      return "Normal";
    }
    if (imc < 30) {
      return "Sobrepeso";
    }
    return "Obeso";
  }
  
  console.log(bmi(65,1.8 ));



  ///el bmi es 