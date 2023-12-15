//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38() {
    let num, sumaDivisores = 0

    num = parseInt(prompt("Ingrese un numero para verificar si es un numero perfecto: "))

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumaDivisores += i
        }
    }

    if (sumaDivisores === num) {
        alert("El numero " + num + " es un numero perfecto.");
    } else {
        alert("El numero " + num + " no es un numero perfecto.");
    }
}
