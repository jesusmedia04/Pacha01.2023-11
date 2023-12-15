/* Hacer un algoritmo en JavaScript para calcular el resto 
y cociente por medio de restas sucesivas.*/

function ejercicio26(){



        let dividendo = (parseInt(prompt('el numero dividesndo es: ')))
        let divisor = (parseInt(prompt('el numero divisor es: ')))
      
        // Si el divisor es 0, no se puede dividir
        if (divisor === 0) {
          alert("El divisor no puede ser 0");
        }
      
        // El cociente inicial es 0
        var cociente = 0;
      
        // El resto inicial es el dividendo
        var resto = dividendo;
      
        // Mientras el resto sea mayor o igual al divisor, se resta el divisor al resto
        while (resto >= divisor) {
          resto -= divisor;
          cociente++;
        }
      
        // El resto final es el que queda después de las restas
        //return [resto, cociente];
      
      
      // Ejemplo de uso
      alert('El resto final es: ' + resto + ',' + 'el cociente es: ' + cociente)
      
}