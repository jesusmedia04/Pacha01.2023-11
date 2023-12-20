/* Hacer un algoritmo en JavaScript para realizar la 
suma de todos los números pares hasta el 1000.*/

function ejercicio24(){
    let n = parseInt(prompt('ingrese en numero: '))
        // Si n es menor o igual a 2, la suma es 0
        if (n <= 2) {
          return 0;
        }
      
        // De lo contrario, la suma es la suma de los números pares desde 2 hasta n
        var suma = 0;
        for (var i = 2; i <= n; i += 2) {
          suma += i;
        }
      
       
    
      
      // Ejemplo de uso
      alert ('la suma es la suma de los números pares desde 1 hasta n: ' + suma )
      


}