function Ejercicio1(){
//hacer algoritmo que lea un numero por el teclado

let numero = parseInt( prompt("Escribe un numero"))
if(numero>100 && numero<999){
    alert ("Este numero tiene 3 digitos")
}
else{

    alert("Este numero no tiene 3 digitos")
}



}


function Ejercicio2(){
//Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

let numero = parseInt(prompt("Hola, Ingresa un número "))
if (numero < 0 ) {
  
  alert("El número es negativo")
} 
else {
  
  alert("El número no es negativo")
}
}


function Ejercicio3(){
//Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

let numero = parseInt(prompt("Hola, Ingresa un número "))
if (numero%10==4 ) {
  
  alert("Felicitaciones, El número termina en 4")
} 
else {
  
  alert("Lo sentimos, El número no termina en 4")
}
}


function Ejercicio4(){

//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

let n= parseInt(prompt( "Hola, Ingresa tres numeros:"));
let ac=0, c=0,r=0,aux=0;
while(c<=9){
    aux=n;
    while(aux>0){
        r=aux%10;
        if(r==c){
            ac=(ac*10)+r;

        }
    aux=(aux-r)/10;
}

c=c+1;
}
alert( ac )}




    //Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.



    function Ejercicio5 (){
        let numero = parseInt( prompt("Escribe la cantidad de zapatos"))
        if(numero>10&&numero<20){
            alert ("El cliente tiene 10% de descuento")
        }
      if(numero>20&&numero<30){
        alert("El cliente tiene 20% de descuento")
      }

            if(numero>30){
                alert("El cliente tiene 40% de descuento")

                }
      }


      function Ejercicio6(){
//Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora

let horas = parseInt( prompt("Escribe la cantidad de horas trabajadas"))
 if (horas <=40){
    sueldo=horas *20;
    alert("el sueldo semanal es :"+sueldo);

 }
 else {
   
    sueldoextra=(40*20)+((horas-40)*25);
    alert("el sueldo semanal es :"+sueldoextra);
 }}


 

    //Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
function Ejercicio7(){

        let numero = parseInt( prompt("Escoja un numero de acuerdo a su membresia: Tipo A(1), Tipo B(2) o Tipo C (3)"))
        if(numero<=1){
            alert ("Membresia Tipo A, usted tiene 10% de descuento")
        }
      if(numero<=2&& numero>=2){
        alert("Membresia Tipo B, usted tiene 15% de descuento")
      }

            if(numero<=3&& numero>=3){
                alert("Membresia Tipo C, usted tiene 20% de descuento")
            }
    }



    function Ejercicio8(){
//Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.


let nota1=parseInt(prompt(" Ingrese su primera nota"));
let nota2=parseInt(prompt("Ingrese su segunda nota"));
let nota3=parseInt(prompt(" Ingrese su tercera nota"));

let promedio = (nota1+nota2+nota3) / 3;
let promRound = Math.round(promedio)
if(promRound >=11){
    alert("Usted aprobo el curso");
}else {
    alert(" Usted reprobo el curso");
}}




    //Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
    function Ejercicio9(){


 let sueldo = parseInt(prompt( "Hola, Ingresa tu sueldo actual para calcular tu aumento"));
if ( sueldo<=2000){
    let nuevosueldo = 0.10*sueldo;
    alert("Su aumento mensual sera " + nuevosueldo)
 }else{

    if ( sueldo>=2001){
        let nuevosueldo = 0.05*sueldo;
        alert("Su aumento mensual sera " + nuevosueldo)
     }}}




    
//Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function Ejercicio10(){
  
  // Solicita al usuario un número
  let numero = parseInt(prompt("Hola, Ingresa un número para determinar si es par o impar"));
  if( numero % 2 === 0){
  alert(" El numero que ingresaste es par");
  let esPar = esPar(numero);
 } else {
   alert("El número que ingresaste es impar");
  }}

     

  function Ejercicio11(){
//Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
 let n1=parseInt(prompt(" Escogiendo el mayor numero, Ingresa el Primer Numero "));
 let n2= parseInt(prompt("Ingresa el Segundo Numero "));
 let n3=parseInt(prompt("Ingresa Tercer Numero "));
 if (n1>n2&&n1>n3){
    alert ( "El mayor numero es" +n1);
 }
 if(n2>n1&&n2>n3){
    alert( "El mayor numero es" +n2)
 }else{
    alert(" El mayor numero es" +n3)
 }
  }




  function Ejercicio12(){

//Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
let n1=parseInt(prompt(" Escogiendo el mayor de dos numeros: Ingresa el Primer Numero..."));
let n2= parseInt(prompt("Ingresa el Segundo Numero..."));
if (n1>n2){
   alert ( "El mayor numero es " + n1);
}
if(n2>n1){
   alert( "El mayor numero es " + n2)

  }else{
    alert(" Intenta de nuevo")}
  }

  

  function Ejercicio13(){
//Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

let letra = parseInt(prompt("Ingresa una letra para determinar si es vocal"));
    if (letra = ["a", "e", "i", "o", "u"]){
        alert("La letra ingresa es una vocal")

  } else {
    alert("La letra ingresada no es una vocal.");
  }
  }


  function Ejercicio14(){
 let numero=parseInt(prompt(" Ingrese un numero para determinar si es primo"))
 let divisor =1, contador = 0;
 while(divisor <=numero){
    if(numero % divisor ==0){
        contador++;
    }
    divisor++;
 }
  contador ==2? alert("El numero es primo"): alert("Lo sentimos, el numero no es primo");
}




function Ejercicio15(){

//Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos
let numero = parseInt(prompt(" Ingrese un numero para calcular Centimetros a Pulgadas y Libras a Kilogramos"));

 let n1= numero *0.3937
let n2= numero / 0.45359237 
    alert (" Gracias, El total en Centimetros es: " +n1)
    alert( "Gracias, El total en Kilos es: " +n2)}


    function Ejercicio16(){

        //Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
        let nro1 = parseInt(prompt( " Ingrese un numero para determinar el dia de la semana"))
        if  (nro1 == "1") {
            alert ("Lunes");
        }   
        else {
            if  (nro1 == 2) {
                alert ("Martes");
            }
            else {
                if (nro1 == 3) {
                    alert ("Miercoles");
                }   
                else {
                     if (nro1 == 4) {
                         alert ("Jueves");
                     }
                         else {
                             if (nro1 == 5) {
                                 alert ("viernes");
                             }
                                 else {
                                     if (nro1 == 6) {
                                         alert ("Sabado");
                                     }
                                         else { alert ("Domingo"); 
                                              }
                                     }
                            }
                    }}}}



                    function Ejercicio17(){


            //Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo. (17 PENDIENTE)
alert( "Este ejercicio fue cancelado por el instructor porque no se entendian las instrucciones")

                    }


                    function Ejercicio18(){
//Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
let cantidad, precio,desc,compra,pagar;

cantidad= parseInt(prompt( "Ingresar cantidad de CDs a comprar"));
if (cantidad<=9 ){
compra = 10 * cantidad;
ganancia= compra*0.0825 ;
alert(" El total del cliente es:  " +compra )
alert(" Tu ganacia en esta venta es "+ganancia);
                    
                    }
                    else {
if (cantidad>=10, cantidad<=99){
compra = 8 * cantidad;
ganancia= compra*0.0825 ;
alert(" El total del cliente es:  " +compra )
alert(" Tu ganacia en esta venta es "+ganancia);
}
else {
if (cantidad>=100, cantidad<=499){
compra =  7* cantidad;
ganancia= compra*0.0825 ;
alert(" El total del cliente es:  " +compra )
alert(" Tu ganacia en esta venta es "+ganancia);
                    }
                    else {
                        if (cantidad>500)
                        compra =  6* cantidad;
                        ganancia= compra*0.0825 ;
                        alert(" El total del cliente es:  " +compra )
                        alert(" Tu ganacia en esta venta es "+ganancia);}}}}




function Ejercicio19(){
    //Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
      // Solicita al usuario el número identificador del empleado
      let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado, Cajero(ID: 10), Servidor(ID: 20), Preparador de Mezclas(ID :30) o Mantenimiento(ID: 40)"));
      
      // Solicita al usuario la cantidad de días que trabajó el empleado
      let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó el empleado"));
    let empleados = [
        {
          id: 10,
          salario: 56,
        },
        {
          id: 20,
          salario: 64,
        },
        {
          id: 30,
          salario: 80,
        },
        {
          id: 40,
          salario: 48,
        },
      ];
      
    
      let empleado = empleados.find((empleado) => empleado.id === idEmpleado);
      
      // Calcula el salario total
      let salarioTotal = diasTrabajados * empleado.salario;
      
      // Imprime el salario total
      alert("El salario total a pagar a su empleado es " + salarioTotal);

}


function Ejercicio20(){
    //Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:Cuántos números son Pares?

let numero1 = parseInt(prompt("Ingresa el primer número"));
let numero2 = parseInt(prompt("Ingresa el segundo número"));
let numero3 = parseInt(prompt("Ingresa el tercer número"));
let numero4 = parseInt(prompt("Ingresa el cuarto número"));

let cantidadPares = 0;
if (numero1 % 2 === 0) {
  cantidadPares++;
}
if (numero2 % 2 === 0) {
  cantidadPares++;
}
if (numero3 % 2 === 0) {
  cantidadPares++;
}
if (numero4 % 2 === 0) {
  cantidadPares++;
}


let numeroMayor = Math.max(numero1, numero2, numero3, numero4);


if (numero3 % 2 === 0) {
  numero2 *= numero2;
}
if (numero1 < numero4) {
  const suma = numero1 + numero2 + numero3 + numero4;
  const media = suma / 4;
  alert("La media es " + media);
}


if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
  alert("La suma es " + numero1 + numero2 + numero3 + numero4);
}


alert("La cantidad de números pares es " + cantidadPares);
alert("El número mayor es " + numeroMayor);
}


function Ejercicio21(){
//Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

let numero=parseInt(prompt( " Ingrese un numero para calcular su factorial"));
let total = 1;
for(var i =1; i <=numero; i++)
total = total * i;
alert( "El factorial del numero es:" + total )
}



function Ejercicio22(){
//Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

let nro= parseInt(prompt(" Ingresar numero para calcular la suma"));
suma= nro*(nro+1)/2;
alert(" La suma del numero ingresado es: " +suma);
}


function Ejercicio23(){
   // Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
let num1=parseInt(prompt( "Ingresar numero:"))
   let num2= parseInt(prompt(" Ingresar el segundo numero:"));
   let sumImpar =0, n1 = num1 +1, n2= num2 -1;
   while(n1<=n2){
    if(n1%2 !=0){
        sumImpar +=n1;
    }
    n1++;
}
alert( sumImpar +num1+ num2);
}


function Ejercicio24(){

    //Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
   let numero=parseInt(prompt(" La suma de los numeros pares de 0 hasta 1000. Porfavor ingrese cualquier teclado"))
        numero= (1000*(1000+1))/2
       alert( "Gracias, La suma total de pares es:  " + numero)
      }
      
      
function Ejercicio25(){
// Solicitamos al usuario el número
    let num1=parseInt(prompt( " Ingrese un numero para calcular el factorial"));
    let total = 1;
    for(var i =1; i <=num1; i++)
    total = total * i;
    alert( "El factorial del numero elegido es:" + total )
   
}
    
function Ejercicio26(){
//Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

let a = parseInt(prompt(" Ingrese un numero"))
let b= parseInt(prompt('Ingrese el segundo numero'))
  let cociente = 0;

  while (a >= b) {
    a= a-b;}
cociente++;
    alert(" El resto es: " +a);
    alert(" El cociente es:  " +cociente);
  
}


    function Ejercicio27(){
//Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

let suma = 0;
let media = 0;
let contador = 0;
let entrada = null;
do {
  entrada = prompt(
    "Introduce un número, pulse Cancelar si no quiere seguir: "
  );
  
  if (entrada === null) break;
 
  let numero = parseFloat(entrada);
 
  console.log(numero);
  
  if (isNaN(numero)) {
    alert("El valor introducido " + entrada + " no es un numero");
  } else {
  
    contador++;
    suma = suma + numero;
    media = suma / contador;
  }
 
  if (confirm("¿Desea seguir ingresando datos?")) {
  } else break;
} while (entrada !== null);
// Si no ingresó ningún dato
if (entrada === null, entrada <=0) {
  alert("Se acaba de ingresar un numero  negativo, el programa finalizó");
} else {
 
  alert( "La media de los números introducidos son: " + media.toFixed(2)
  );
}}






function Ejercicio28(){

//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
var suma = 0;
do{

    var numeros=prompt("Digita un numero ")
    if(Number(numeros)==numeros){
numeros= Number(numeros);
suma=suma+numeros;
    }

    else{
        if(numeros !=undefined){
            alert(numeros + " El numero no es valido");
        }
    }
} while(numeros != undefined);
alert(" La suma total de los numeros es:" +suma); 
}

  





function Ejercicio29(){
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
var suma = 0;
do{

    var numeros=prompt("Digita el numero a sumar")
    if(Number(numeros)==numeros){
numeros= Number(numeros);
suma=suma+numeros;
    }

    else{
        if(numeros !=undefined){
            alert(numeros + " No es un valor numerico valido");
        }
    }
} while(numeros != undefined);
alert(" La suma de los numeros ingresados es:" +suma);
}





function Ejercicio30(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
    function suma() {

        let suma = 0;
      
        // Iteramos desde 1 hasta 100
        for (let i = 1; i <= 100; i++) {
          // Sumamos el número actual
          suma += i;
        }
      
        // Devolvemos la suma
        return suma;
      }
      
      // Imprimimos la suma
      alert("La suma de los primeros cien números es " + suma());
    
}


function Ejercicio31(){
    //Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

    function media(numeros) {
      
        let sumaPares = 0;
        let sumaImpares = 0;
        let contadorPares = 0;
        let contadorImpares = 0;
      
        
        for (let i = 0; i < numeros.length; i++) {
          // Si el número es par
          if (numeros[i] % 2 == 0) {
           
            sumaPares += numeros[i];
      
            
            contadorPares++;
          } else {
          
            sumaImpares += numeros[i];
      
            
            contadorImpares++;
          }
        }
      
     
        let mediaPares = sumaPares / contadorPares;
      
        
        let mediaImpares = sumaImpares / contadorImpares;
      
        return [mediaPares, mediaImpares];
      }
      
      let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
      
      let medias = media(numeros);
      
     
      alert("La media de los 10 primeros números pares es " + medias[0]);
      alert("La media de los 10 primeros números impares es " + medias[1]);}






      function Ejercicio32(){
    //Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
    alert ("NO HAY DATOS SUFICIENTES, el tutor nos dijo que no hagamos esta pregunta")
}

function Ejercicio33(){

//Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.


    
let respuesta=parseInt(prompt("¿Si desea continuar con el programa? ingrese 1, si desea terminar el programa ingrese 2)"));
 
  
 
    if (respuesta <= " 1 ") 
     alert("Continuando con el programa...");
  if (respuesta >= "2")
    
    alert("Terminando el programa...");
  }

  function Ejercicio34(){
//Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve


  let multiplicador = 1;

 
  alert("Tabla de multiplicar");

  
  for (multiplicador = 1; multiplicador <= 9; multiplicador++) {
    
    alert("* " + multiplicador);

    
    for (let i = 1; i <= 9; i++) {
      // Imprimimos el producto
      alert(" " + i + " x " + multiplicador + " = " + i * multiplicador);
    }

    
    alert();
  }
}


tablaMultiplicar();

  
function Ejercicio35(){
//Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.


let mayor =0
let menor = 9999999;
let i =1;
let c =parseInt(prompt("Ingresar la cantidad de numeros que desea ejecutar"));
while (i <=c){
    let n= parseInt(prompt(" Ingresar el numero"));
    if(n>mayor){
        mayor=n;

    }
    if(n<menor){
        menor =n;
    }
    i++;
} alert("El numero mayor es" +mayor, "El numero menor "+menor)}



function Ejercicio36(){
//Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
 alert( "La serie Finobacci es la siguiente")   
  var n1=0,n2=1,next,i;
  var num=10;
  for(i=1;i<=num;i++){
    alert(n1);
    next=n1+n2;
    n1=n2;
    n2=next;
  }}


  function Ejercicio37(){

    //Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
   
let x = parseInt(prompt("Escribe el primer  numero"));
let y= parseInt(prompt(" Escribe el segundo numero"));
x= Math.abs(x);
y=Match.abs(y);
let z;
while(y){
    z=y;
    y==x%y;
    x=z;

}alert( "el M.C.D es"+x)
}

  
  
  function Ejercicio38(){

//Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
  
   suma=parseInt(prompt(" Ingresar el numero para determinar si es perfecto"));
  
  let suma = 0;

 
  for (let i = 1; i <= n; i++) {
   
    if (n % i === 0) {
      // Sumamos el divisor
      suma += i;
    }
  }

  
  return suma === n;
}





  
  function Ejercicio39(){

  

  let pi = 0;
  let i = 0;

 
  while (i <= n) {
   
    let termino = 4 / (2 * i + 1);

    
    pi += termino;

  
    i++;
  }

  // Devolvemos pi
  alert(+termino)
  }

  function Ejercicio40(){
    JavaScript
function piNilakantha(n) {
  
  let pi = 3;
  let i = 0;

  
  while (i <= n) {
    
    let termino = 4 / ((2 * i + 1) * (2 * i + 2));

    
    pi += termino;


    i++;
  }

 
  alert( +pi)
}}



  