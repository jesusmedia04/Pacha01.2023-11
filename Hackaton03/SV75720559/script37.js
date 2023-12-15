//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio37() {
    let num1, num2, resto;

    num1 = parseInt(prompt("Ingrese el primer numero: "))
    num2 = parseInt(prompt("Ingrese el segundo numero: "))

    while (num2 !== 0) {
        resto = num1 % num2
        num1 = num2
        num2 = resto
    }

    alert("El maximo comun divisor (MCD) es: " + num1);
}

