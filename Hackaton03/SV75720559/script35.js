//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor
//y menor, se debe ingresar sólo veinte números.
function ejercicio35() {
    let number, mayorcito = -9999, menorcito = 9999

    for (i = 1; i <= 20; i++) {
        number = parseInt(prompt("Ingrese el número : " + i ))

        if (number > mayorcito) {
            mayorcito = number
        }
        if (number < menorcito) {
            menorcito = number
        }
    }

    alert("El numero mayor es:" + mayorcito)
    alert("El numero menor es:" + menorcito)
}
