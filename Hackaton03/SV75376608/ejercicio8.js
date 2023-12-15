//Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
let nota1 = parseInt(prompt("Digite su nota 1"))
let nota2 = parseInt(prompt("Digite su nota 2"))
let nota3 = parseInt(prompt("Digite su nota 3"))

let promedio = (nota1 + nota2 + nota3) / 3

if(promedio >= 13){
    alert("El estudiante aprobó , su promedio es " + Math.round(promedio))
}else {
    alert("El estudiante no aprobó , su promedio es " + Math.round(promedio))
}