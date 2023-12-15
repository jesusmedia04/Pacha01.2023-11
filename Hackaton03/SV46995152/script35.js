/* Hacer un algoritmo en JavaScript que nos permita 
saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.*/

function ejercicio35(){

  
        // Se inicializan las variables
        var numeroActual = 0;
        var numeroMayor = -Infinity;
        var numeroMenor = Infinity;
      
        // Se leen los veinte números
        for (var i = 0; i < 20; i++) {
          numeroActual = Number(prompt("Ingrese un número: "));
      
          // Se actualiza el número mayor
          if (numeroActual > numeroMayor) {
            numeroMayor = numeroActual;
          }
      
          // Se actualiza el número menor
          if (numeroActual < numeroMenor) {
            numeroMenor = numeroActual;
          }
        }
      
        // Se imprimen los números mayor y menor
        alert("El número mayor es: " + numeroMayor);
       alert("El número menor es: " + numeroMenor);
      
      
   
}