/*Hacer un algoritmo en JavaScript para 
calcular la suma de los primeros cien números con un ciclo repetir. */

function ejercicio28(){
    
        // La suma de los primeros cien números es 0
        var suma = 0;
      
        // Se inicia el contador en 1
        var contador = 1;
      
        // Se repite el ciclo hasta que el contador sea mayor o igual a 100
        do {
          suma += contador;
          contador++;
        } while (contador <= 100);
      
        // Se devuelve la suma
 
      
      
      // Ejemplo de uso
      alert('la suma de los 100 primeros numeros es: ' + suma); // 5050
      
       
      
      
      
      
}