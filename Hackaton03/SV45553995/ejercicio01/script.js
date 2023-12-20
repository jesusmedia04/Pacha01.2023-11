function ejercicio01(){
//Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

let numero = parseInt (prompt ("Escribe un numero") )
if(numero >0 && numero <999 ){
alert ("este numero tiene 3 digitos")
}
else{
alert ("este numero no tiene 3 digitos")
}
}