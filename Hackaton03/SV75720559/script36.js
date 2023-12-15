//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio36() {
    let a = 0, b = 1, c, terminos
    
    terminos = parseInt(prompt("Ingrese la cantidad de terminos de la serie Fibonacci:"))


    alert("La serie de Fibonacci para " + terminos + " terminos:");

    for (i = 1; i <= terminos; i++) {
        alert(a);

        c = a + b;
        alert(c);

        a = b
        b = c
    }
}

