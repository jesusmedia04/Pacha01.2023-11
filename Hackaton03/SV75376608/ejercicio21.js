//Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

let numero = parseInt(prompt("Escriba el numero para sacar factorial"))

let factorial = 1

if(numero == 0){
    alert("El factorial de " + numero +  " es 0")
}else{
    for(let i = 1 ; i <= numero ; i++){
        factorial *= i
    }
    
    alert("El factorial de " + numero + " es :" + factorial)
}