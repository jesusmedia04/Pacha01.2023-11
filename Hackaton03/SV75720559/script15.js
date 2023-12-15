//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15(){
    let centimetros, pulgadas, libras, kilogramos
    centimetros = parseFloat(prompt("Ingrese la cantidad de centimetrosa convertir a pulgadas : "))
    libras = parseFloat(prompt("Ingresela cantidad en libras a convertir a kilogramos : "))
    
    pulgadas = centimetros / 2.54
    kilogramos = libras * 0.453592

    alert("El resultado de la conversion de centimetros a pulgadas es : " + pulgadas)
    alert("El resultado de la conversion de libras a kilogramos es : " + kilogramos)
}