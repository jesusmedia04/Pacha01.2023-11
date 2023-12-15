//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21(){
    let num, fact, i

    num = parseInt(prompt("Ingrese un numero que se calculara el factorial : "))

    fact = 1

    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }

    alert("El factorial de " + num + " es: " + fact)
}