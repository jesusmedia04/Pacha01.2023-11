//Hacer un algoritmo en JavaScript que lea tres números 
//enteros y los muestre de menor a mayor. (Pendiente)

function ejercicio04(){
   
  let numero1 = parseInt(prompt("Ingresa el primer número: "));
  let numero2 = parseInt(prompt("Ingresa el segundo número: "));
  let numero3 = parseInt(prompt("Ingresa el tercer número: "));

  let min
  let med 
  let max 
 
  if (numero1< numero2 && numero1 < numero3){
      min = numero1;
    if(numero2 < numero3){
      med = numero2;
      max = numero3
    }else{
      med = numero3;
      max = numero2;
    }

  } else {
    if(numero2 < numero1 && numero2<numero3){
      min =numero2;
      if(numero1<numero3){
        med = numero1;
        max = numero3;
      }else{
        med =numero3;
        max = numero1;
      }
    } else{
      min = numero3;
      if(numero1<numero2){
        med = numero1;
        max = numero2;
      }else{
        med = numero2;
        max = numero1;
      } 
    }
  }

  alert ('los numeros odenados de menos a mayor son: ' + min + ' ' + med + ' ' + max )
}


