//20. Hacer un algoritmo en JavaScript que que lea 4 números 
//enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido
//entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
function ejercicio20(){
    let n1, n2, n3, n4, cantP, may, media, suma

    n1 = parseInt(prompt("Ingrese el primer numero: "))
    n2 = parseInt(prompt("Ingrese el segundo numero: "))
    n3 = parseInt(prompt("Ingrese el tercer numero: "))
    n4 = parseInt(prompt("Ingrese el cuarto numero: "))

    cantP = 0

    if (n1 % 2 === 0) {
        cantP = cantP + 1
    }
    if (n2 % 2 === 0) {
        cantP = cantP + 1
    }
    if (n3 % 2 === 0) {
        cantP = cantP + 1
    }
    if (n4 % 2 === 0) {
        cantP = cantP + 1
    }

    may = n1

    if (n2 > may) {
        may = n2
    }
    if (n3 > may) {
        may = n3
    }
    if (n4 > may) {
        may = n4
    }
    if (n3 % 2 === 0) {
        n2 = n2 * n2
    }
    if (n1 < n4) {
        media = (n1 + n2 + n3 + n4) / 4
    }
    if (num2 > num3 && n3 >= 50 && n3 <= 700) {
        suma = n1 + n2 + n3 + n4
    }
    prompt("Cantidad de numero pares: " + cantP)
    prompt("El mayor de todos es: " + may)
    prompt("El cuadrado del segundo si el tercero es par: " + n2)
    prompt("La media de los 4 numeros si el primero es menor que el cuarto: " + media)
    prompt("La suma de los 4 numeros si se cumple la segunda condicion: " + suma)
}