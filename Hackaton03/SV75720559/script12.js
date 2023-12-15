//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12(){
    let n1, n2, n3, nMayor = parseInt
    n1 = parseInt(prompt("Ingrese el primero numero : "))
    n2 = parseInt(prompt("Ingrese el segundo numero : "))

    nMayor = n1
    if (n2 > nMayor) {
        nMayor = n2
    }
    alert("El numero mayo es : " + nMayor)
}