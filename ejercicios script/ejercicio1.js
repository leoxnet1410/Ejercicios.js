//// escribir una  funcion llamada contrasenaValida que reciba un string y retorne 
///tru si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".De lo contrario debe retornar false 

// Codigo original de leonardo
// function contrasenaValida(contrasena) {
//     if(contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
//       return true;
//     } else {
//       return false;
//     }
//   }

// Codigo Corregido
function contrasenaValida(contrasena){
  return contrasena === '2Fj(jjbFsuj' || contrasena === "eoZiugBf&g9"
}
console.clear(); // Limpiamos la consola


console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("344ffadfhfgh")); // false
console.log(contrasenaValida("eoZiugBf&g9")); // true

  
  