//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11(){
    let n1, n2, n3, mayorN = parseInt
    n1 = parseInt(prompt("Ingrese el primero numero : "))
    n2 = parseInt(prompt("Ingrese el segundo numero : "))
    n3 = parseInt(prompt("Ingrese el tercero numero : "))

    mayorN = n1
    if (n2 > mayorN) {
        mayorN = n2
    } 
    if (n3 > mayorN) {
        mayorN = n3
    }
    alert("El numero mayo es : " + mayorN)
}