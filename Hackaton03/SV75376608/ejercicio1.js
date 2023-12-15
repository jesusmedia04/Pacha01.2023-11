//Ejercicio1
//Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

let numero = prompt("Escribe un numero porfavor")

if(numero > 99 && numero < 1000){
    alert("El numero " + numero +  " es de 3 digitos")
}else{
    alert("El numero " + numero +  " no es de 3 digitos")
}
