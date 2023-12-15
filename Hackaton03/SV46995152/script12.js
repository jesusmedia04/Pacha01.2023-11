/* Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.*/
function ejercicio12(){
    let numero1 = parseInt(prompt('ingrese el primer numero'));
    let numero2 = parseInt(prompt('ingrese el segundo numero'));
   
    if(numero1 > numero2){
        alert('el mayor numero es: ' + numero1)
    }else {
        alert('el mayor numero es: ' + numero2)
    }
}