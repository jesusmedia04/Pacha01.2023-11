/* Hacer un algoritmo en JavaScript parar calcular la media 
de los números pares e impares, sólo se ingresará diez números.
 */

function ejercicio31(){

  
        // La suma de los números pares es 0
        var sumaPares = 0;
      
        // La cantidad de números pares es 0
        var cantidadPares = 0;
      
        // La suma de los números impares es 0
        var sumaImpares = 0;
      
        // La cantidad de números impares es 0
        var cantidadImpares = 0;
      
        // Se leen diez números
        for (var i = 0; i < 10; i++) {
          var numero = Number(prompt("Ingrese un número: "));
      
          // Se verifica si el número es par
          if (numero % 2 === 0) {
            sumaPares += numero;
            cantidadPares++;
          } else {
            sumaImpares += numero;
            cantidadImpares++;
          }
        }
      
        // Se calcula la media de los números pares
        var mediaPares = sumaPares / cantidadPares;
      
        // Se calcula la media de los números impares
        var mediaImpares = sumaImpares / cantidadImpares;
      
        // Se imprimen las medias
       alert("La media de los números pares es: " + mediaPares);
        alert("La media de los números impares es: " + mediaImpares);
      
      
    
      
}