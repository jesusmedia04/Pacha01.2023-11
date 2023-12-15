function ejercicio39(){
//Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

let n, terminoActual, piAprox;

n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de pi: "));
piAprox = 0;

for (let i = 0; i < n; i++) {
    // Calcula el término con la fórmula
    terminoActual = 4 / (1 + 2 * i);

    if (i % 2 === 0) {
        piAprox += terminoActual;
    } else {
        piAprox -= terminoActual;
    }
}

console.log("La aproximación de pi con", n, "términos es:", piAprox);
}