/* Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.*/

function ejercicio36(){

    let n =parseInt(prompt('numero Fibonacci hasta: '))
   
        // Se inicializan los dos primeros números de la serie
        var a = 0;
        var b = 1;
      
        // Se crea un arreglo para almacenar los números de la serie
        var serie = [];
      
        // Se itera hasta el décimo número
        for (var i = 0; i < n; i++) {
          // Se agrega el siguiente número de la serie al arreglo
          serie.push(a);
      
          // Se calcula el siguiente número de la serie
          var c = a + b;
      
          // Se actualizan los dos primeros números de la serie
          a = b;
          b = c;
        }
      
        
        alert('los nuemros son: '+ serie)
      
      
      
      
}