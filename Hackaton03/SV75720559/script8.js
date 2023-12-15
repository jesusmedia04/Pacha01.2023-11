//8. Hacer un algoritmo en JavaScript para calcular 
//el promedio de tres notas y determinar si el 
//estudiante aprobó o no.
function ejercicio08(){
    let n1, n2, n3, promedio
    let notaA = 10.5

    n1 = parseFloat(prompt("Ingrese la primera nota : "))
    n2 = parseFloat(prompt("Ingrese la segunda nota : "))
    n3 = parseFloat(prompt("Ingrese la tercera nota : "))
    
    promedio = (n1 + n2 + n3) / 3

    if (promedio > notaA) {
        alert("El estudiante aprobo con una nota de :" + promedio)
    } else {
        alert("El estudiante no aprobo con una nota de: " + promedio)
    }
}