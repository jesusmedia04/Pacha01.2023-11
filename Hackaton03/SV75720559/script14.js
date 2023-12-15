//14. Hacer un algoritmo en JavaScript que lea un entero
//positivo del 1 al diez y al 9 y determine si es un número primo. (Pendiente)
function esPrimo(numero) {
    if (numero <= 1) {
        return false
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

function ejercicio14() {
    let numero = parseInt(prompt("Ingrese un numero entre 1 y 10 : "))

    if (numero >= 1 && numero <= 10) {
        if (esPrimo(numero)) {
            alert(numero + " es un numero primo.")
        } else {
            alert(numero + " no es un numero primo.")
        }
    } else {
        alert("El numero ingresado está fuera del rango permitido.")
    }
}

