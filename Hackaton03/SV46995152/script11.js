/* Hacer un algoritmo en JavaScript que lea tres números y diga 
cuál es el mayor.*/
function ejercicio11(){
    let numero1 = parseInt(prompt('ingrese el primer numero'));
    let numero2 = parseInt(prompt('ingrese el segundo numero'));
    let numero3 = parseInt(prompt('ingrese el tercer numero'));
    let mayor;
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
      } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
      } else {
        mayor = numero3;
      }
    
    alert('el mayor numero es: ' + mayor )
}