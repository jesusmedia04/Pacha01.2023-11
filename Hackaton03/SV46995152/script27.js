/* Hacer un algoritmo en JavaScript para determinar la 
media de una lista indefinida de números positivos, 
se debe acabar el programa al ingresar un número negativo.*/

function ejercicio27(){
    
        // La suma de los números positivos es 0
        var suma = 0;
      
        // La cantidad de números positivos es 0
        var cantidad = 0;
      
        // Se lee un número
        var numero = Number(prompt("Ingrese un número positivo: "));
      
        // Mientras el número sea positivo, se calcula la media
        while (numero >= 0) {
          suma += numero;
          cantidad++;
      
          // Se lee otro número
          numero = Number(prompt("Ingrese otro número positivo: "));
        }
      
        // Si el número es negativo, se termina el programa
        if (numero < 0) {
          alert("La media de los números positivos es: " + suma / cantidad);
        }
      
   
      


}
