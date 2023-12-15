function ejercicio01()
{
    
    //1. Hacer un algoritmo en Pseint que lea un n�mero por el teclado y determinar si tiene tres d�gitos.

let numer;


numer = parseInt(prompt("Digite un numero de tres digitos"));


if (numer >= 100 && numer <= 999) {
    alert("El numero ingresado tiene tres digitos");
} else {
    alert("El numero ingresado no tiene tres digitos");
}

}

function ejercicio02()
{

//2. Hacer un algoritmo en Pseint que lea un n�mero entero por el teclado y determinar si es negativo.


let numer;


numer = parseInt(prompt("Digite un numero entero"));


if (numer < 0) {
    alert("El numero: " + numer + " es negativo");
} else {
    alert("El numero: " + numer + " es positivo");
}

}


function ejercicio03()
{

//3. Hacer un algoritmo en Pseint que lea un n�mero y determinar si termina en 4.


let numer, ud;


numer = parseInt(prompt("Dijite un numero entero"));


if (numer >= 0) {
    ud = numer - Math.trunc(numer / 10) * 10;
}


if (ud === 4) {
    alert("El numero ingresado termina en 4");
} else {
    alert("El numero ingresado no termina en 4");
}
    

}



function ejercicio04()
{

//4. Hacer un algoritmo en Pseint que lea tres n�meros enteros y los muestre de menor a mayor.


let a, b, c, aux;


alert("Ingrese los valores de A, B y C:");
a = parseInt(prompt("A:"));
b = parseInt(prompt("B:"));
c = parseInt(prompt("C:"));


do {
    if (a > b) {
        aux = a;
        a = b;
        b = aux;
    }

    if (b > c) {
        aux = b;
        b = c;
        c = aux;
    }
} while (a > b || b > c);


alert("Los números ordenados de menor a mayor son:");
alert(a);
alert(b);
alert(c);
    
}



function ejercicio05()
{

//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoci�n de 
//descuento para vender al mayor, esta depender� del n�mero de zapatos que se compren. 
//Si son m�s de diez, se les dar� un 10% de descuento sobre el total de la compra;
//si el n�mero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% 
//de descuento; y si son m�s treinta
//zapatos se otorgar� un 40% de descuento. El precio de cada zapato es de $80.


let cantidad_zapatos, subtotal, descuento, total;


cantidad_zapatos = parseInt(prompt("Ingresa cuantos zapatos desea comprar:"));


subtotal = cantidad_zapatos * 80;


if (cantidad_zapatos > 10 && cantidad_zapatos <= 20) {
    descuento = subtotal * 0.1;
} else if (cantidad_zapatos > 20 && cantidad_zapatos <= 30) {
    descuento = subtotal * 0.2;
} else if (cantidad_zapatos > 30) {
    descuento = subtotal * 0.4;
} else {
    descuento = 0;
}


total = subtotal - descuento;


alert("Venta Total: $" + subtotal);
alert("El descuento es: $" + descuento);
alert("Precio con descuento incluido es: $" + total);
alert("Gracias por su compra");
    
}


function ejercicio06()
{

//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cu�l ser� su 
//sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagar� $20 por hora, 
//pero si trabaja m�s de 40 horas entonces las horas extras se le pagar�n a $25 por hora.


let horas, horas_extras, pago;


horas = parseFloat(prompt("Escribir cuantas horas a trabajado"));


if (horas >= 40) {
    horas_extras = horas - 40;
    pago = (40 * 20) + (horas_extras * 25);
} else {
    pago = horas * 20;
}


alert("El pago semanal por horas es: $" + pago);
    
}



function ejercicio07()
{

//. 7.Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes
//con membres�a dependiendo de su tipo, s�lo existen tres tipos de membres�a, tipo A, tipo B y tipo C. 
//Los descuentos son los siguientes:
// Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento


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




function ejercicio08()
{

//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar 
//si el estudiante aprob� o no.


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




function ejercicio09()
{

//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba m�s de $2000 tendr� un aumento del 5%, si generaba menos de
//$2000 su aumento ser� de un 10%.


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

//10. Hacer un algoritmo en Pseint que diga si un n�mero es par o impar.


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


function ejercicio12()
{

//12. Hacer un algoritmo en Pseint que lea dos n�meros y diga cu�l es el mayor.


let a, b, mayor;


a = parseInt(prompt("Ingrese el primer numero:"));
b = parseInt(prompt("Ingresa el segundo numero:"));

mayor = a;

if (mayor < b) {
    mayor = b;
}


alert("El numero mayor es: " + mayor);

}


function ejercicio13()
{
    
//13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

    
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

function ejercicio14()
{
    
//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un n�mero primo.

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



function ejercicio15()
{
   
//15. Hacer un algoritmo en Pseint que convierta cent�metros a pulgadas y libras a kilogramos.

let centimetros, pulgadas, libras, kilogramos;

centimetros = parseFloat(prompt("Ingresa el valor de centimetros:"));

pulgadas = centimetros / 2.54;
alert("El valor convertido de centimetro a pulgadas es: " + pulgadas.toFixed(2) + " pulgadas");


libras = parseFloat(prompt("Ingresa el valor de libras:"));


kilogramos = libras * 0.45359237;
alert("El valor convertido de libra a kilogramos es: " + kilogramos.toFixed(2) + " kilogramos");
}



function ejercicio16()
{
    
// 16.Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.

    
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


function ejercicio17()
{
    
// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

    
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


function ejercicio18()
{
    
// 18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

//   $10. Si se compran unidades separadas hasta 9.

//   $8. Si se compran entre 10 unidades hasta 99.

//    $7. Entre 100 y 499 unidades.

//    $6. Para mas de 500 unidades.

//    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.


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


function ejercicio19()
{
    
// 19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

//    Cajero (56$/día).

//    Servidor (64$/día).

//    Preparador de mezclas (80$/día).

//    Mantenimiento (48$/día).

//    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó


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


function ejercicio20()
{
    
// 20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//    ¿Cuántos números son Pares?

//    ¿Cuál es el mayor de todos?

//    Si el tercero es par, calcular el cuadrado del segundo.

//    Si el primero es menor que el cuarto, calcular la media de los 4 números.

//   Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.



let num1, num2, num3, num4, pares, mayor, cuadradoSegundo, media, suma;

// Leer 4 números enteros positivos
num1 = parseInt(prompt("Ingrese el primer número:"));
num2 = parseInt(prompt("Ingrese el segundo número:"));
num3 = parseInt(prompt("Ingrese el tercer número:"));
num4 = parseInt(prompt("Ingrese el cuarto número:"));


// ¿Cuántos números son Pares?
pares = 0;
if (num1 % 2 === 0) pares++;
if (num2 % 2 === 0) pares++;
if (num3 % 2 === 0) pares++;
if (num4 % 2 === 0) pares++;
alert("Cantidad de números pares: " + pares);

// ¿Cuál es el mayor de todos?
mayor = num1;
if (num2 > mayor) mayor = num2;
if (num3 > mayor) mayor = num3;
if (num4 > mayor) mayor = num4;
alert("El mayor de todos es:" + mayor);

// Si el tercero es par, calcular el cuadrado del segundo.
if (num3 % 2 === 0) {
    cuadradoSegundo = num2 * num2;
    alert("El cuadrado del segundo número es:" + cuadradoSegundo);
} else {
    alert("El tercero no es par");
}

// Si el primero es menor que el cuarto, calcular la media de los 4 números.
if (num1 < num4) {
    media = (num1 + num2 + num3 + num4) / 4.0;
    alert("La media de los 4 números es: " + media);
} else {
    alert("El primero no es menor que el cuarto");
}

// Si el segundo es mayor que el tercero, verificar si el tercero está comprendido entre los valores 50 y 700.
// Si cumple la segunda condición, calcular la suma de los 4 números.
if (num2 > num3 && num3 >= 50 && num3 <= 700) {
    suma = num1 + num2 + num3 + num4;
    alert("La suma de los 4 números es:" + suma);
} else {
    alert("No cumple segunda condición");
}


}


function ejercicio21()
{

// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.


let numero, factorial;


numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));


factorial = 1;


if (numero >= 0) {
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

  
    alert("El factorial de : " + numero + "  es : " + factorial);
} else {
    alert("No se puede calcular el factorial de un número negativo.");
}

}


function ejercicio22()
{

// 22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
   
   
let n, suma;


n = parseInt(prompt("Ingrese un número para calcular la suma de los n primeros números:"));


suma = 0;


if (n >= 0) {
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    
    alert("La suma de los primeros "  + n +  " números es:  "  + suma);
} else {
    alert("No se puede calcular la suma de los primeros n números con n negativo.");
}
}



function ejercicio23()
{

// 23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
 
   
let n, sumaImpares;


n = parseInt(prompt("Ingrese el número:"));


sumaImpares = 0;


if (n >= 0) {
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sumaImpares += i;
        }
    }

    
    alert("La suma de los números impares hasta " + n+ " es : " + sumaImpares);
} else {
    alert("Ingrese un valor de n no negativo.");
}
    
}



function ejercicio24()
{

// 24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.


let sumaPares = 0;


for (let i = 2; i <= 1000; i += 2) {
    sumaPares += i;
}


alert("La suma de todos los números pares hasta 1000 es : " + sumaPares);


    
}



function ejercicio25()
{

//25.Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.


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



function ejercicio26()
{

//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.


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



function ejercicio27()
{

// 27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.


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

// 28. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.


let contador = 1;
let suma = 0;


do {
    suma += contador;
    contador++;
} while (contador <= 100);


alert("La suma de los primeros cien números es : " + suma);

}



function ejercicio29()
{

// 29. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.


let contador = 1;
let suma = 0;


while (contador <= 100) {
    suma += contador;
    contador++;
}


alert("La suma de los primeros cien números es : " + suma);
    
}



function ejercicio30()
{

//30. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.

// Definir variables
let numero = 100;
let suma = 0;

// Calcular la suma de los primeros cien números con un ciclo para
for (let i = 1; i <= numero; i++) {
    suma += i;
}

// Mostrar el resultado
alert(suma);
    
}


function ejercicio31 ()
{

//31 Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.


// Definir variables
let total = 10;
let arreglo = new Array(total);

// Leer diez números y almacenar en el arreglo
for (let i = 0; i < total; i++) {
    arreglo[i] = parseInt(prompt("Ingresa un número:"));
}

// Calcular la media de los números pares e impares
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

// Mostrar los resultados
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

//33 Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

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


function ejercicio35 ()
{

//35 Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

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


function ejercicio36 ()
{

//36 Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

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


function ejercicio37 ()
{

//37 Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.


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


function ejercicio38 ()
{

//38 Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto


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


function ejercicio39 ()
{

//39 Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
//La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...


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


function ejercicio40 ()
{

//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha.
//La formula que se debe aplicar es:

//Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...


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


