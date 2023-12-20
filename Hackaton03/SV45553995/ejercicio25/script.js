/*Hacer un algoritmo en JavaScript para calcular el 
factorial de un número de una forma distinta. */

function ejercicio25(){
    let n = parseInt(prompt('ingrese en numero: '))
        // Si n es 0 o 1, el factorial es 1
        if (n === 0 || n === 1) {
          return 1;
        }
      
        // De lo contrario, el factorial es la suma de los números desde 1 hasta n
      
      
      
    alert('el factorial es la suma de los números desde 1 hasta n es: ' + (n * (n - 1) / 2 ))
      


}