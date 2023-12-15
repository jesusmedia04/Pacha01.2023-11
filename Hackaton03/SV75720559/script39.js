//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación
//del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
function ejercicio39() {
    let n, terminoA, piA = 0


    n = parseInt(prompt("Ingrese la cantidad de terminos para la aproximacion de pi: "))

    for (let i = 0; i < n; i++) {
        terminoA = 4 / (1 + 2 * i)

        if (i % 2 === 0) {
            piA += terminoA
        } else {
            piA -= terminoA
        }
    }

    alert("La aproximación de pi con" + n +  "términos es:" + piA);
}
