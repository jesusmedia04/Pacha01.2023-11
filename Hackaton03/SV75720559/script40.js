//40. Hacer un algoritmo en JavaScript que cumpla con 
//la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
function ejercicio40() {
    let n, pi_A, denominador
    pi_A = 3.0
    denominador = 2.0

    n = parseInt(prompt("Ingrese la cantidad de terminos para aproximar pi: "))

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            pi_A -= 4 / (denominador * (denominador + 1) * (denominador + 2))
        } else {
            pi_A += 4 / (denominador * (denominador + 1) * (denominador + 2))
        }
        denominador += 2
    }

    alert("La aproximacion de pi con" + n + "terminos es:" + pi_A)
}

