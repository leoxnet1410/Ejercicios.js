////Escribir una función llamada calcularImpuestos que reciba
// dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor 
///a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18) {
      if (ingresos >= 1000) {
        return ingresos * 0.4;
      }  else {
        return 0;
      }
  } else {
        return 0;
      }
  }
  
  console.log(calcularImpuestos(19,2000));
  console.log(calcularImpuestos(15,2222));
  