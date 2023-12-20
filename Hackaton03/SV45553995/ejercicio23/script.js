/*Hacer un algoritmo en JavaScript para calcular la 
suma de los números impares menores o iguales a n. */

function ejercicio23(){
    let n = parseInt(prompt('ingrese en numero: '))
        // Si n es menor o igual a 0, la suma es 0
        if (n <= 0) {
          return 0;
        }
      
        // De lo contrario, la suma es la suma de los números impares desde 1 hasta n
        var suma = 0;
        for (var i = 1; i <= n; i += 2) {
          suma += i;
        }
      
      // Ejemplo de uso
      alert ('la suma es la suma de los números impares desde 1 hasta n: ' + suma )
      

}