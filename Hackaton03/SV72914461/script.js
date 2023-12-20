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

 function ejercicio07(){

let precio, descuento, tipo;


precio = parseFloat(prompt("¿Buenos dias por favor digitar el precio del Helado?"));
tipo = prompt("¿Que tipo de Membresia tiene? (Tipo A, B o C)").toUpperCase();


switch (tipo) {
    case "A":
        descuento = (precio * 10) / 100;
        precio -= descuento;
        break;
    case "B":
        descuento = (precio * 15) / 100;
        precio -= descuento;
        break;
    case "C":
        descuento = (precio * 20) / 100;
        precio -= descuento;
        break;
    default:
        alert("Tipo de membresía no válido.");
}


alert("El precio del Helado es $" + precio.toFixed(2) + " soles");
    
 }


 function ejercicio08() {
 
 
 let Nota1, Nota2, Nota3, Prom;
 
  Nota1 = parseFloat(prompt("Ingrese Nota 01:"));
 Nota2 = parseFloat(prompt("Ingrese Nota 02:"));
 Nota3 = parseFloat(prompt("Ingrese Nota 03:"));
 
 
 Prom = (Nota1 + Nota2 + Nota3) / 3;
 
 
 if (Prom > 11) {
     alert("El estudiante Aprobo");
 } else {
     alert("El estudiante desaprobo");
 }
 
 
 alert("EL PROMEDIO ES: " + Prom.toFixed(2));
     
 }
 
 
 function ejercicio09()  {
 

  let sueldo, incremento, nuevo_sueldo;
  
 sueldo = parseFloat(prompt("Ingrese el sueldo que ganaba:"));
 
  incremento = 0;
 
 
 if (sueldo > 2000) {
     incremento = sueldo * 0.05;
 } else {
     incremento = sueldo * 0.10;
 }
  
 nuevo_sueldo = sueldo + incremento;
 
 alert("Incremento en el sueldo: $" + incremento.toFixed(2));
 alert("Sueldo: $" + nuevo_sueldo.toFixed(2));
     
 }
 
 
 
 function ejercicio10()
 {
 
 
 let numer;
 
  numer = parseInt(prompt("Ingresa un numero:"));
  
 if (Math.trunc(numer / 2) === 1.0 * numer / 2) {
     alert("El número ingresado es par.");
 } else {
     alert("El número ingresado es impar.");
 }
     
 }


 function ejercicio11()
 {
 
 //11. Hacer un algoritmo en Pseint que lea tres n�meros y diga cu�l es el mayor.
 
     
 let a, b, c, mayor;
 
 
 a = parseInt(prompt("Ingrese el primer numero:"));
 b = parseInt(prompt("Ingresa el segundo numero:"));
 c = parseInt(prompt("Ingresa el tercer numero:"));
 
 
 mayor = a;
 
 
 if (mayor < b) {
     mayor = b;
 }
 
 
 if (mayor < c) {
     mayor = c;
 }
 
 
 alert("El numero mayor es: " + mayor);
 
     
 }
 
 
 function ejercicio12() {
 
 let a, b, mayor;
  
 a = parseInt(prompt("Ingrese el primer numero:"));
 b = parseInt(prompt("Ingresa el segundo numero:"));
 
 mayor = a;
 
 if (mayor < b) {
     mayor = b;
 }
  
 alert("El numero mayor es: " + mayor);
 
 }
  
 function ejercicio13() {
     
 let Letra;
 
 
 Letra = prompt("Ingrese una Letra:").toUpperCase();
 
 
 switch (Letra) {
     case "A":
     case "E":
     case "I":
     case "O":
     case "U":
         alert("VOCAL");
         break;
     default:
         alert("La letra ingresada no es una vocal, es un consonante");
 
 }
 }
 
 function ejercicio14() {
     
 let a, contar;
  
 a = parseInt(prompt("Por favor ingrese un numero"));
  
 contar = 0;
  
 for (let i = 1; i <= a; i++) {
     if (a % i === 0) {
         contar++;
     }
 }
 
  if (contar === 2) {
     alert(a + " es un numero primo");
 } else {
     alert(a + " no es un numero primo");
 }
 }
  
 
 function ejercicio15() {
    
 let centimetros, pulgadas, libras, kilogramos;
 
 centimetros = parseFloat(prompt("Ingresa el valor de centimetros:"));
 
 pulgadas = centimetros / 2.54;
 alert("El valor convertido de centimetro a pulgadas es: " + pulgadas.toFixed(2) + " pulgadas");
 
 
 libras = parseFloat(prompt("Ingresa el valor de libras:"));
 
 
 kilogramos = libras * 0.45359237;
 alert("El valor convertido de libra a kilogramos es: " + kilogramos.toFixed(2) + " kilogramos");
 }
 
  
 function ejercicio16() {
       
 let numero;
  
 numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
 
 switch (numero) {
     case 1:
         alert("Lunes");
         break;
     case 2:
         alert("Martes");
         break;
     case 3:
         alert("Miércoles");
         break;
     case 4:
         alert("Jueves");
         break;
     case 5:
         alert("Viernes");
         break;
     case 6:
         alert("Sábado");
         break;
     case 7:
         alert("Domingo");
         break;
     default:
         alert("Número no válido, ingrese un número del 1 al 7.");
 }
 }
 
 
 function ejercicio17() {
          
 let hora, minuto, segundo;
  
 hora = parseInt(prompt("Ingrese la hora (formato de 24 horas):"));
 minuto = parseInt(prompt("Ingrese los minutos:"));
 segundo = parseInt(prompt("Ingrese los segundos:"));
  
 if (segundo < 59) {
     segundo = segundo + 1;
 } else {
     segundo = 0;
 
     if (minuto < 59) {
         minuto = minuto + 1;
     } else {
         minuto = 0;
 
         if (hora < 23) {
             hora = hora + 1;
         } else {
             hora = 0;
         }
     }
 }
 
 
 alert("La hora después de un segundo es: " + hora + ":" + minuto + ":" + segundo);
 }
 
 
 function ejercicio18() {
       
 let cantidad, precioUnitario, precioTotal, gananciaVendedor;
  
 cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
 
 
 if (cantidad <= 9) {
     precioUnitario = 10;
 } else if (cantidad >= 10 && cantidad <= 99) {
     precioUnitario = 8;
 } else if (cantidad >= 100 && cantidad <= 499) {
     precioUnitario = 7;
 } else {
     precioUnitario = 6;
 }
 
 
 precioTotal = cantidad * precioUnitario;
 gananciaVendedor = precioTotal * 0.0825; 
 
 
 alert("Precio total para el cliente: $" + precioTotal.toFixed(2));
 alert("Ganancia para el vendedor: $" + gananciaVendedor.toFixed(2));
 
 }
  
 function ejercicio19() {
       
 let idEmpleado, diasTrabajados, salarioDiario, totalPagar;
  
 idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (11:cajero,22:servidor,33:preparador,44:mantenimiento):"));
  
 switch (idEmpleado) {
     case 11:
         salarioDiario = 56;
         break;
     case 22:
         salarioDiario = 64;
         break;
     case 33:
         salarioDiario = 80;
         break;
     case 44:
         salarioDiario = 48;
         break;
     default:
         alert("Número de empleado no válido.");
         
         return;
 }
 
  diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));
 
 
 if (diasTrabajados > 6) {
     alert("La cantidad de días trabajados no puede ser mayor a 6.");
 } else {
     totalPagar = diasTrabajados * salarioDiario;
     alert("El dueño debe pagar al empleado $" + totalPagar.toFixed(2));
 }
 
 }

 function ejercicio20(){
    
let num1, num2, num3, num4, pares, mayor, cuadradoSegundo, media, suma;

num1 = parseInt(prompt("Ingrese el primer número:"));
num2 = parseInt(prompt("Ingrese el segundo número:"));
num3 = parseInt(prompt("Ingrese el tercer número:"));
num4 = parseInt(prompt("Ingrese el cuarto número:"));


pares = 0;
if (num1 % 2 === 0) pares++;
if (num2 % 2 === 0) pares++;
if (num3 % 2 === 0) pares++;
if (num4 % 2 === 0) pares++;
alert("Cantidad de números pares: " + pares);


mayor = num1;
if (num2 > mayor) mayor = num2;
if (num3 > mayor) mayor = num3;
if (num4 > mayor) mayor = num4;
alert("El mayor de todos es:" + mayor);


if (num3 % 2 === 0) {
    cuadradoSegundo = num2 * num2;
    alert("El cuadrado del segundo número es:" + cuadradoSegundo);
} else {
    alert("El tercero no es par");
}


if (num1 < num4) {
    media = (num1 + num2 + num3 + num4) / 4.0;
    alert("La media de los 4 números es: " + media);
} else {
    alert("El primero no es menor que el cuarto");
}

if (num2 > num3 && num3 >= 50 && num3 <= 700) {
    suma = num1 + num2 + num3 + num4;
    alert("La suma de los 4 números es:" + suma);
} else {
    alert("No cumple segunda condición");
}


}


function ejercicio21(){


let numero1, factorial;

numero1 = parseInt(prompt("Ingrese un número para calcular su factorial:"));

factorial = 1;

if (numero1 >= 0) {
    for (let i = 1; i <= numero1; i++) {
        factorial *= i;
    }

  
    alert("El factorial de : " + numero1 + "  es : " + factorial);
} else {
    alert("No se puede calcular el factorial de un número negativo.");
}

}


function ejercicio22(){

let num, suma;

num = parseInt(prompt("Ingrese un número para calcular la suma de los n primeros números:"));

suma = 0;

if (num >= 0) {
    for (let i = 1; i <= num; i++) {
        suma += i;
    }
    
    alert("La suma de los primeros "  + num +  " números es:  "  + suma);
} else {
    alert("No se puede calcular la suma de los primeros n números con n negativo.");
}
}


function ejercicio23(){
   
let x, sumaImpares;

x = parseInt(prompt("Ingrese el número:"));

sumaImpares = 0;

if (x >= 0) {
    
    for (let i = 1; i <= x; i++) {
        if (i % 2 !== 0) {
            sumaImpares += i;
        }
    }
    
    alert("La suma de los números impares hasta " + x+ " es : " + sumaImpares);
} else {
    alert("Ingrese un valor de n no negativo.");
}
    
}


function ejercicio24(){

let sumaPares = 0;

for (let i = 2; i <= 1000; i += 2) {
    sumaPares += i;
}

alert("La suma de todos los números pares hasta 1000 es : " + sumaPares);
    
}


function ejercicio25(){


let numero, factorial;

numero = parseInt(prompt("Ingrese un numero para calcular el factorial:"));

if (numero < 0) {
    alert("El factorial no está definido para números negativos.");
} else {
    
    factorial = 1;

    
    while (numero > 0) {
        factorial *= numero;
        numero--;
    }

    
    alert("El factorial es : " + factorial);
}
}


function ejercicio26(){


let dividendo, divisor, cociente, resto;

dividendo = parseInt(prompt("Ingrese el dividendo:"));

divisor = parseInt(prompt("Ingrese el divisor:"));


if (divisor === 0) {
    alert("Error: No se puede dividir por cero.");
} else {
    
    cociente = 0;
    resto = dividendo;

    
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    
    alert("Cociente : " + cociente);
    alert("Resto : " + resto);
}


}



function ejercicio27(){


let numero, suma = 0, contador = 0;

alert("Ingrese números positivos. Ingrese un número negativo para terminar.");

async function leerNumero() {
    return new Promise(resolve => {
        
        const input = prompt("Ingrese un número:");

        const num = parseFloat(input);

        
        resolve(num);
    });
}


async function calcularMedia() {
    do {
        
        numero = await leerNumero();

       
        if (numero >= 0) {
          
            suma += numero;
            contador++;
        }
    } while (numero >= 0);

    
    if (contador > 0) {
        const media = suma / contador;
        alert("La media de los números positivos ingresados es : " + media);
    } else {
        alert("No se ingresaron números positivos.");
    }
}


calcularMedia();
    
}


function ejercicio28()
{

let contador = 1;
let suma = 0;

do {
    suma += contador;
    contador++;
} while (contador <= 100);


alert("La suma de los primeros cien números es : " + suma);

}


function ejercicio29(){

let contador = 1;
let suma = 0;

while (contador <= 100) {
    suma += contador;
    contador++;
}

alert("La suma de los primeros cien números es : " + suma);
    
}



function ejercicio30(){
let numero = 100;
let suma = 0;

for (let i = 1; i <= numero; i++) {
    suma += i;
}


alert(suma);
    
}


function ejercicio31 ()
{

let total = 10;
let arreglo = new Array(total);


for (let i = 0; i < total; i++) {
    arreglo[i] = parseInt(prompt("Ingresa un número:"));
}


let mediaPar = 0;
let cantPar = 0;
let mediaImpar = 0;
let cantImpar = 0;

for (let i = 0; i < total; i++) {
    if (arreglo[i] % 2 === 0) {
        cantPar++;
        mediaPar += arreglo[i];
    } else {
        cantImpar++;
        mediaImpar += arreglo[i];
    }
}


alert("Resultados :");

alert(`Número de elementos pares: ${cantPar}`);
alert(`Media de los números pares: ${cantPar !== 0 ? mediaPar / cantPar : 0}`);
alert(`Número de elementos impares: ${cantImpar}`);
alert(`Media de los números impares: ${cantImpar !== 0 ? mediaImpar / cantImpar : 0}`);

}

function ejercicio32 ()
{

    alert("Falta información para realizar el ejercicio");
    
}

function ejercicio33 ()
{

let numero = 0;
alert("Hola, para seguir con el proceso presione aceptar");

while (numero !== 1) {
    numero = parseInt(prompt("Ingrese el número 1 para continuar:"));

    if (numero !== 2) {
        alert("Presione aceptar, por favor.");
    }
}

alert("Al fin, puede continuar con el proceso.");
    
}

function ejercicio34 ()
{

//34 Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.

const numero = 9;

for (let i = 1; i <= 9; i++) {
    alert(`${numero} x ${i} = ${i * numero}`);
}
    
}

function ejercicio35 (){

const total = 20;
const arreglo = [];

for (let i = 0; i < total; i++) {
    const numero = parseInt(prompt("Ingrese un número: "));
    arreglo.push(numero);
}


for (let i = 0; i < total - 1; i++) {
    for (let j = i + 1; j < total; j++) {
        if (arreglo[i] > arreglo[j]) {
            const temp = arreglo[i];
            arreglo[i] = arreglo[j];
            arreglo[j] = temp;
            i = 0;
            j = i + 1;
        }
    }
}

alert("El menor es : " + arreglo[0]);
alert("El mayor es : " + arreglo[total - 1]);

    
}


function ejercicio36 (){

const numero = parseInt(prompt("Ingrese un número: "));

let a = 0;
let b = 1;

for (let i = 1; i <= numero; i++) {
    alert(a);
    const c = a + b;
    a = b;
    b = c;
}
    
}


function ejercicio37 (){

function calcularMCD(num1, num2) {
    let resto;

    
    while (num2 !== 0) {
        resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }
   
    return num1;
}

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

let mcd = calcularMCD(numero1, numero2);
alert("El M.C.D. de "+ numero1 + " y "+ numero2+ " es : "+ mcd);
    
}


function ejercicio38(){

function esNumeroPerfecto(numero) {
    let suma = 1;
    
    for (let i = 2; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }

    
    return suma === numero;
}


let numero = parseInt(prompt("Ingrese un número:"));


if (esNumeroPerfecto(numero)) {
    alert("El número " + numero + " es perfecto.");
} else {
    alert("El número " + numero + " no es perfecto.");
}
    
}


function ejercicio39 (){

function calcularAproximacionPi(numero) {
    let constante = 4;
    let divisor = 1;
    let numPi = 0;

    for (let i = 1; i <= numero; i++) {
        alert(`pi = ${constante} / ${divisor}`);
        
        if (i % 2 !== 0) {
            numPi += constante / divisor;
        } else {
            numPi -= constante / divisor;
        }

        divisor += 2;
    }

    return numPi;
}


let numero = parseInt(prompt("Ingrese un número:"));


let resultado = calcularAproximacionPi(numero);
alert("El resultado es : " + resultado);
    
}


function ejercicio40 (){

function calcularAproximacionPi(numero) {
    let constante = 4;
    let divisor_inicial = 2;
    let numPi = 3;

    for (let i = 1; i <= numero; i++) {
        let divisor = divisor_inicial * (divisor_inicial + 1) * (divisor_inicial + 2);
        alert(`pi = ${constante} / ${divisor}`);
        
        if (i % 2 !== 0) {
            numPi += constante / divisor;
        } else {
            numPi -= constante / divisor;
        }

        divisor_inicial += 2;
    }

    return numPi;
}


let numero = parseInt(prompt("Ingrese un número:"));


let resultado = calcularAproximacionPi(numero);
alert("El resultado es : " + resultado);
    
}

 






 
 
 








    








    