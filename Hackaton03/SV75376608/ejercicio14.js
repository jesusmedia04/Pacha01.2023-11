//Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo. (Pendiente)

let numero = parseInt(prompt("Escribe un numero entre el 1  al 10"))

if (numero >= 1 && numero <= 10){
        if(numero == 2 || numero == 3){
            alert("Tu numero " + numero + " es primo")
        }else if (numero%2 == 0 || numero % 3 == 0){
            alert("Tu numero " + numero + " no es primo")
        }else 
        {
            alert("Tu numero " + numero + " es primo")
        }
}else {
    alert("El numero " + numero + " esta fuera de rango" )
}