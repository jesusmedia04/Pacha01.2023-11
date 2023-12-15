function ejercicio01(){
    //Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero>100 && numero < 999){
        alert("Este numero tiene 3 digitos")
    }
    else{
        alert("Este numero no tiene 3 digitos")
    }
    }