/*Hacer un algoritmo en JavaScript para una empresa se encarga de la venta 
y distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
(supongamos un único producto de una única marca) por cantidad. Los precios son:
 $10. Si se compran unidades separadas hasta 9.
 $8. Si se compran entre 10 unidades hasta 99.
 $7. Entre 100 y 499 unidades.
 $6. Para mas de 500 unidades.
 La ganancia para el vendedor es de 8,25 % de la venta.
 Realizar un algoritmo en JavaScript que dado un número de CDs a 
 vender calcule el precio total para el cliente y la ganancia para el 
 vendedor. */
 function ejercicio18(){
    let numero = parseInt(prompt('ingresar cantidad de CD a vender'));
    let precio 
    if(numero <=9){
        precio = 10;
    }else if(numero >=10 && numero <= 99){
        precio = 8;
    }else if(numero >= 100 && numero <= 499){
        precio = 7;
    }else if(numero >=500){
        precio = 6;
    }
    alert('precio total es: ' + (numero * precio ) + ',' + 
    'la ganacia es: ' + ((numero*precio ) * 0.0825)  )
 }