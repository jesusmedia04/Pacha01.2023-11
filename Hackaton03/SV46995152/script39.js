/* Hacer un algoritmo en JavaScript que cumpla con la aproximación 
del número pi con la serie de Gregory-Leibniz. La formula que se debe 
aplicar es:
 Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...*/
 function ejercicio39(){
    let n = parseInt(prompt('ingrese el numero'))
   
        // Se inicializa la suma de los términos
        var suma = 4 / 1;
      
        // Se itera desde 1 hasta n
        for (var i = 3; i <= n; i += 2) {
          // Se agrega el término correspondiente
          suma += ((i % 4 === 0) ? -4 : 4) / i;
        }
        alert('la aproximacion de pi es: ' + suma )
      
        // Se devuelve la suma
        //return suma * 4;
    
      
      // Ejemplo de uso
      //console.log(aproximarPi(100)); // 3,141592653589793
      
      



 }