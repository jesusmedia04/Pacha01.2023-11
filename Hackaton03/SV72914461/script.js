function ejercicio01(){
    //Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero>100 && numero< 999){
        alert("Este numero tiene 3 digitos")
    }
    else{
        alert("Este numero no tiene 3 digitos")
    }
    }
    function ejercicio02(){
    let numero2 = parseInt( prompt("Escribe un numero entero"))
    if(numero2 < 0){
        alert("Este numero es negativo")

    }else{
        alert("Este numero es positivo")
    }
    }

    function ejercicio03(){
        let numero3 = parseInt( prompt("Escribe un numero entero"))
        if(numero3%10==4){
           alert("El numero ingresado termina en 4")
    
        }else{
            alert("El numero ingresado no termina en 4")
           
        }
        }

    function ejercicio04(){

        let a = prompt(`introduzca el primer número`);
        let b = prompt(`intrioduzca el segundo número`);
        let c = prompt(`introduzca el tercer número`);
if( a > b ){
			aux = a
			a = b
			b = aux
            b >c
          
}else {
         aux = b
         b = c
         c = aux
         a < b &  b<c
          alert("El orden es ", a < b &  b<c)
}
            }
  function ejercicio05(){


    let subtotal;
    let descuento;
    let total;
    let cantidad_zapatos = parseInt( prompt("Ingresa cuantos zapatos desea comprar"))

    subtotal = cantidad_zapatos*80;
    descuento = 0;
    if(cantidad_zapatos>10 & cantidad_zapatos<=20){
        descuento <= subtotal*0.1;
    }else{}
    if (cantidad_zapatos>20 & cantidad_zapatos<=30 ){
        descuento <= subtotal*0.2;
     } else{}
    if( cantidad_zapatos>30 ){
        descuento <= subtotal*0.4;
    }else{
    total <= subtotal-descuento;

	alert( "Venta Total :" , subtotal)
    alert("El descuento es : ", descuento)
	alert( "Precio con descuento incluido es: : ", total)

    }
            }

 function ejercicio06(){
    let pago
    let horas = parseInt( prompt("Escribir cuantas horas a trabajado"))
   
	
	if( horas >= 40 ){
		horas_extras=horas-40
		pago = (40*20) + (horas_extras *25)
    }else{
		pago=horas*20
	}
	
	alert( "El pago semanal por horas es : " , pago)

 }


    








    