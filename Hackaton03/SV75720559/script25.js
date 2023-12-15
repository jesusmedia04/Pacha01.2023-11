//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25(){
    let num, fact, i

    num = parseInt(prompt("Ingrese el numero que se va a calcular su factorial : "))

    fact = 1

    if (num < 0) {
        alert(prompt("El factorial de números negativos no está definido."))
    } else {
        for (i = 1; i <= num; i++) {
            fact = fact * i
        }
        alert("El factorial de " + num + " es : " + fact)
    }
}