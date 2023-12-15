//Hacer un algoritmo en JavaScript que lea un número y determinar 
//si termina en 4.

function ejercicio03() {
  let numero = parseInt(prompt("Ingresa un número: "));
  let numero2 = numero % 10; 

  if(numero2 === 4) {
    alert ("El número termina en 4");
  }else {
    alert ("El número no termina en 4");
  }
}



  

