//Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.

// Operadores “>” y “<”
//{}

function ejercicio09(){
    
    let aumento, total;
    let sueldo = parseInt( prompt("ingrese el sueldo del trabajador: "))
    
    if (sueldo>=2000)
    {
     aumento=sueldo*0.05
     total=sueldo+aumento   
     document.write("tendrá un aumento de: "+aumento+" El Nuevo Sueldo será: ", total)
    }
    else
    if(sueldo<2000)
    {
     aumento=sueldo*0.10
     total=sueldo+aumento   
     document.write("tendrá un aumento de: "+aumento+" El Nuevo Sueldo será: ", total)
    }
 }