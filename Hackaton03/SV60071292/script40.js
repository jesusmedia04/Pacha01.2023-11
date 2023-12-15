function ejercicio40(){
//Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

let n, piAprox, denominador;

n = parseInt(prompt("Ingrese la cantidad de términos para aproximar a pi:"));
piAprox = 3.0;
denominador = 2.0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        piAprox -= 4 / (denominador * (denominador + 1) * (denominador + 2));
    } else {
        piAprox += 4 / (denominador * (denominador + 1) * (denominador + 2));
    }

    denominador += 2;
}

console.log("La aproximación de pi con", n, "términos es:", piAprox);
}