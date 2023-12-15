/* Hacer un algoritmo en JavaScript que imprima la tabla de 
multiplicar de los números del uno nueve.*/

function ejercicio34(){


  // Se inicia el contador en 1
  var contador = 1;

  // Se repite el ciclo mientras el contador sea menor o igual a 9
  while (contador <= 9) {
    // Se imprime el encabezado de la tabla
    console.log("Múltiplo de " + contador);

    // Se repite el ciclo para cada número del 1 al 9
    for (var i = 1; i <= 9; i++) {
      // Se imprime el producto
      console.log("" + contador + " x " + i + " = " + contador * i);
    }

    // Se incrementa el contador
    contador++;
  }





}