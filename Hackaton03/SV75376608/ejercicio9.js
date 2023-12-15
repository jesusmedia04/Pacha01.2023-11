//Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador,
// se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

let respuesta = parseInt(prompt("Cuanto es tu sueldo"))

if(respuesta >= 2000) {
    alert("Tu sueldo es " + respuesta + " , supera o es igual a los $2000 , tienes un aumento del 5%")
    alert("Tu sueldo ahora es: " + (respuesta + (0.05 * 2000)) )
}else {
    alert("Tu sueldo es " + respuesta + " , esta por debajo de $2000 , tienes un aumento del 10%")
    alert("Tu sueldo ahora es: " + (respuesta + (0.10 * 2000)) )
}