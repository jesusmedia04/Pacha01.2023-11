/*  Hacer un algoritmo en JavaScript que diga si un número es par o impar.*/

function ejercicio10(){
let numero = parseInt(prompt('ingrese numero'));
const residuo = numero % 2
if(residuo === 0 ){
    alert('el numero es par')
}else {
    alert('el numero es impar')
}
}


