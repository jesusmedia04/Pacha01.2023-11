/*Hacer un algoritmo en JavaScript para calcular
 la suma de los n primeros números. */

 function ejercicio22(){
    let n = parseInt(prompt('ingrese en numero: '))
    
        // Si n es 0, la suma es 0
        if (n === 0) {
          return 0;
        }
      
        // De lo contrario, la suma es la suma de los números desde 1 hasta n
        var suma = 0;
        for (var i = 1; i <= n; i++) {
          suma += i;
        }
      
       
      
      
      // Ejemplo de uso
      alert ('la suma de los numero desde 1 hasta n es: ' + suma )




 }