/* Hacer un algoritmo en JavaScript para conseguir el M.C.D 
de un número por medio del algoritmo de Euclides.*/
function ejercicio37(){

   let a =parseInt(prompt('ingrese nuemro 1'))
   let b =parseInt(prompt('ingrese nuemro 2'))
   
    // Si uno de los números es 0, el M.C.D es el otro número
    if (a === 0 || b === 0) {
      return a || b;
    }
  
    // Se itera mientras el resto no sea 0
    while (a % b !== 0) {
      // Se intercambian los números
      var aux = a;
      a = b;
      b = aux % b;
    }
  

  alert('el MCD de los numero es: ' + b)
      
}