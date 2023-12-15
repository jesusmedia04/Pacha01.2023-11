//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29(){
    let contador = 1, suma = 0

    while (contador <= 100) {
        suma += contador
        contador++
    }
    alert("La suma de los primeros cien numero son : " + suma)
}