//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22(){
    let n, suma, i

    n = parseInt(prompt("Ingrese la cantidad de numeros que se sumara: "))

    suma = 0

    for (i = 0; i <= n; i++) {
        suma = suma + i        
    }
    alert("La suma de los " + n + " primeros numeros son: " + suma)
}