//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor. (Pendiente)
function ejercicio04(){
    let n1 = parseInt(prompt("Ingrese el primer número"))
    let n2 = parseInt(prompt("Ingrese el segundo número"))
    let n3 = parseInt(prompt("Ingrese el tercer número"))
    let temp = parseInt

    if (n1 > n2) {
        temp = n1
        n1 = n2
        n2 = temp
    }
    if (n2 > n3) {
        temp = n2
        n2 = n3
        n3 = temp
    }
    if (n1 > n2) {
        temp = n1
        n1 = n2
        n2 = temp
    }
    alert("Números ordenados de menor a mayor: " + n1 + ", " + n2 + ", " + n3)
}