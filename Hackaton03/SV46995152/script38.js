/*Hacer un algoritmo en JavaScript que nos permita 
saber si un número es un número perfecto. */
function ejercicio38(){
    let numero =parseInt(prompt('ingrese numero '))
        // Se inicializa la suma de los divisores
        var sumaDivisores = 0;
      
        // Se itera desde 2 hasta la raíz cuadrada del número
        for (var i = 2; i * i <= numero; i++) {
          // Si el número es divisible por i
          if (numero % i === 0) {
            // Se agrega i a la suma de los divisores
            sumaDivisores += i;
      
            // Si el número es divisible por i²
            if (numero % i * i === 0) {
              // Se agrega i² a la suma de los divisores
              sumaDivisores += i * i;
            }
          }
        }

        if(numero === sumaDivisores){
            alert('el numero es perfecto')
        }else{
            alert('el numero no es perfecto')
        }
      
        // Si la suma de los divisores es igual al número
       
      
      
            
          
      


}