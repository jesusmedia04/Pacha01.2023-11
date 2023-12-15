//31. Hacer un algoritmo en JavaScript parar calcular
//la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio31() {
    let num, sumaP = 0, sumaI = 0, contadorP = 0, contadorI = 0, mediaP = 0, mediaI = 0

    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt("Ingrese el número " + i + ": "))

        if (num % 2 === 0) {
            sumaP += num
            contadorP++
        } else {
            sumaI += num;
            contadorI++
        }
    }

    if (contadorP > 0) {
        mediaP = sumaP / contadorP
        alert("La media de los numeros pares es: " + mediaP)
    }

    if (contadorI > 0) {
        mediaI = sumaI / contadorI;
        alert("La media de los numero impares es: " + mediaI)
    }
}