//Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

let dividendo = parseInt(prompt("Escribe el dividendo "))
let divisor = parseInt(prompt("Escribe el divisor "))

let resto = 0
let cociente = 0


while(resto > 0){

    resto =  dividendo % divisor

    if(resto != 0){
        cociente += 1
    }
}