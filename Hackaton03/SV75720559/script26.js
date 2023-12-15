//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26(){

    let dividendo, divisor, cociente, resto

    dividendo = parseInt(prompt("Ingrese el dividendo: "))
    divisor = parseInt(prompt("Ingrese el divisor: "))

    cociente = 0

    while (dividendo >= divisor) {
            dividendo = dividendo - divisor
            cociente = cociente + 1
    }

    resto = dividendo

    alert("El cociente es: " + cociente)
    alert("El resto es: " + resto)
}