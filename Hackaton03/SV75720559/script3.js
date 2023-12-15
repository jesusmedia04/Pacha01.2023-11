//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03(){
    let numero = parseInt(prompt("Ingrese un numero"))

    if (numero % 10 === 4 ) {
        alert("El numero acaba en 4")
    } else {
        alert("El numero no acaba en 4")
    }
}