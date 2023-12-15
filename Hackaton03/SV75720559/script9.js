//9. Hacer un algoritmo en JavaScript para determinar el aumento 
//de un trabajador, se debe tomar en cuenta que si ganaba más
//de $2000 tendrá un aumento del 5%, si generaba menos de $2000 
//su aumento será de un 10%.
function ejercicio09(){
    let sueldo, sueldoA
    sueldo = parseFloat(prompt("Ingresa su sueldo"))

    if (sueldo > 2000) {
        sueldoA = sueldo + sueldo * 0.05
    } else {
        sueldoA = sueldo + sueldo * 0.10
    }
    alert("El sueldo con aumento es : " + sueldoA)
}