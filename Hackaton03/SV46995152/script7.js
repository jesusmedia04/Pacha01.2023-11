/*Hacer un algoritmo en JavaScript para una tienda de helado que da un
 descuento por compra a sus clientes con membresía dependiendo de su tipo,
  sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
  Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento*/

   function ejercicio07(){
    let menbresia = prompt('ingresa el tipo de menbresia');
    let descuento
    if( menbresia === 'A' || menbresia === 'a'){
        descuento = 0.1
    } else if(menbresia === 'B' || menbresia === 'b'){
        descuento = 0.15
    }else if(menbresia === 'C' || menbresia === 'c'){
        descuento = 0.2
    }
    alert('el tipo de membresia: ' + menbresia + ', ' +  'el descuento aplicable es de: ' + (descuento * 100) + '%' )  

   }