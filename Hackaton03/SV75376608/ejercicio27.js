//Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos,
// se debe acabar el programa al ingresar un número negativo.

let numeros = []
let sumaNumeros = 0 
let cantidadNumeros = 0
let bucle =true

while(bucle){
    let numero = parseInt(prompt("Escriba el numero a agregar a la lista"))

    if(numero < 0 ){
        bucle = false
        alert("No se permiten numeros negativos")
        break;
    }
    numeros.push(numero)

    sumaNumeros += numero
    cantidadNumeros += 1

    alert("La media es " + (sumaNumeros / cantidadNumeros))
    console.log(numeros)
    console.log(sumaNumeros)
    console.log(cantidadNumeros)
}