//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23(){
    let n, suma, i

    n = parseInt(prompt("Ingrese un numero para encontrar la suma de los numeros impares que llegue hasta este numero: "))

    suma = 0

    for (i = 1;  i <= n; i++) {
        if (i % 2 !== 0 ) {
            suma = suma + i
        }
    }
    alert("La suma de los numeros impares hasta " + n + " es : "+ suma)
}