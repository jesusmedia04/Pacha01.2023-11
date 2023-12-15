//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24(){
    
    let suma, i

    suma = 0

    for (i = 1; i <= 1000 ; i++) {
        if (i % 2 == 0) {
            suma = suma+ i
        }        
    }
    alert("La suma de  los numeros pares hasta 1000 es: " + suma)
}