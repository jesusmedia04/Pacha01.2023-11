/* Hacer un algoritmo en JavaScript que cumpla con la aproximación del número 
pi con la serie de Nilakantha. La formula que se debe aplicar es:
 Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...*/

 function ejercicio40(){
    
    let n = parseInt(prompt('ingrese el numero'))
        // Se inicializa la suma de los términos
        var suma = 3.0;
      
        // Se itera desde 1 hasta n
        for (var i = 2; i <= n; i++) {
          // Se agrega el término correspondiente
          suma += (4 * ((i % 4 === 0) ? -1 : 1)) / (i * (i + 1) * (i + 2));
        }
        alert('la aproximacion del nuemro : ' + n + ' ,' +'es: '+ suma )
      
        
      

 }