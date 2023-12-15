/* Hacer un algoritmo en JavaScript para determinar el aumento 
.de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 
tendrá un aumento del 5%, si generaba menos de $2000 su aumento será 
de un 10%.*/

function ejercicio09(){
    let sueldo = parseInt(prompt('sueldo actual del trabajador'))
    let aumento
    if(sueldo < 2000){
        aumento = (0.05 * sueldo)
    }else {
        aumento = (0.1 * sueldo)
    }
    alert(
    'el aumento del trabajador es:' + aumento +', ' + 
    'el sueldo total de trabajador es:' + (aumento + sueldo ) )
}