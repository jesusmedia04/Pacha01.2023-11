function Ejercicio1(){  //Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.


let numero=parseInt(prompt( "Ingrese su numero para determinar si tiene tres digitos"));
let contador = 0;

while(numero >=1){
    contador= contador +1;
    numero= numero/10;
}
alert(" El numero tiene " +contador+ " digitos");


}



function Ejercicio2(){
//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.


let n =parseInt(prompt( "Ingrese el numero para determinar la potencia"));

n=(n** 2);
alert( " La potencia de dos de su numero escogido es" +n)}



function Ejercicio3(){
//Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
var cubo = prompt("Ingrese el numero para determinar el cubo");
var cubo2= prompt(" Ingrese el segundo numero para determinar el cubo");
var cubo3= prompt( "Ingrese el tercer numero para determinar el cubo");
 var cubo = cubo*cubo*cubo
 var cubo2= cubo2*cubo2*cubo2
 var cubo3= cubo3*cubo3*cubo3

 total= cubo+cubo2+cubo3


 
alert(" La suma total de sus cubos es " +total)
}


function Ejercicio4(){
//Escribe una función que tome la base y la altura de un triángulo y devuelva su área.triArea(3, 2) ➞ 3

let base=prompt("Ingresa la base del triangulo")
let altura= prompt(" Ingresa la altura del triangulo")

let area=(base*altura)/2
alert(" El area del triangulo es " +area)
}


function Ejercicio5(){
    // Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4


function limpiar(){
    document.getElementById('My calculator').reset();
}
}
function Sumar(){
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
document.getElementById('El-resultado').innerHTML =x+y;
}
function Dividir(){
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
document.getElementById('El-resultado').innerHTML =x-y;
}
function Multiplicar(){
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
document.getElementById('El-resultado').innerHTML =x*y;
}
function Dividir(){
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
document.getElementById('El-resultado').innerHTML =x/y;
}


function Ejercicio6(){
//¿Cómo defines una función? ¿Hasta cuantos argumentos puedes declarar en una función?

alert( "Como defines una funcion? ¿Cómo se define una función en JavaScript? Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.");
alert("Hasta cuantos argumentos puedes declarar en una funcion? No existe un límite máximo para pasar parámetros o argumentos a una función definida por el usuario.")

}

function Ejercicio7(){
    // Ejercicio RETO 2
    // Ejercicio 7.1
    //Crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

let nombre = prompt("Ingrese su nombre: ");
apellido= prompt("Ingrese su apellido: ");
 edad= prompt("Ingrese su edad: ");
 {
nombrecompleto=()=>
alert(" Hola mi nombre es " +nombre + apellido+" y mi edad es " +edad);
}}




function Ejercicio8(){
    //Ejercicio7.2
    //Cree una función que tome números y devuelva la suma de sus cubos.

    var cubo = prompt("Ingrese el numero para determinar el cubo");
var cubo2= prompt(" Ingrese el segundo numero para determinar el cubo");
var cubo3= prompt( "Ingrese el tercer numero para determinar el cubo");
 var cubo = cubo*cubo*cubo
 var cubo2= cubo2*cubo2*cubo2
 var cubo3= cubo3*cubo3*cubo3

 total= cubo+cubo2+cubo3


 
alert(" La suma total de sus cubos es " +total)
}








function Ejercicio9(){
    //Ejercicio7.3
    //Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

        let tipo;
      
        // Comprobamos el tipo de valor
        if (typeof valor === "string") {
          tipo = "string";
        } else if (typeof valor === "number") {
          tipo = "number";
        } else if (typeof valor === "boolean") {
          tipo = "boolean";
        } else if (valor === null) {
          tipo = "null";
        } else if (valor === undefined) {
          tipo = "undefined";
        } else if (valor instanceof Array) {
          tipo = "array";
        } else if (valor instanceof Object) {
          tipo = "object";
        }
      
        // Devolvemos el tipo
        return tipo;
      }









      function Ejercicio10(){
        //Ejercicio7.4
        //Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
        const numeritos = [1, 2, 3, 4, 5];  
        console.log("El acumulado es: ",suma(...numeritos));  
        function suma(...n) {  
         var total=0;  
         n.forEach(function(item){  
          total+=item;  
         });  
         return total;  
        }  }







        function Ejercicio11(array){
//Crear una función que reciba un array de valores y filtre los valores que no son string

  return array.filter(function(value) {
    return typeof value === "string";
  });
  
        }  

        function Ejercicio12(){

//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const arr=[23,5,8,3,97,245,1,4,5,7];

let maxArr= Math.max(...arr)
let minArr=Math.min(...arr)

console.log("El valor maximo es ",maxArr);
console.log("El valor minimo es: " ,minArr);}

function Ejercicio13(){

//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.

let telefono=parseInt(prompt(" Ingrese el primer numero"))
let t1=parseInt(prompt(" Ingrese el segundo numero"))
let t2=parseInt(prompt(" Ingrese el tercer numero"))
let t3=parseInt(prompt(" Ingrese el cuarto numero"))
let t4=parseInt(prompt(" Ingrese el quinto numero"))
let t5=parseInt(prompt(" Ingrese el sexto numero"))
let t6=parseInt(prompt(" Ingrese el septimo numero"))
let t7=parseInt(prompt(" Ingrese el octavo numero"))
let t8=parseInt(prompt(" Ingrese el noveno numero"))
let t9=parseInt(prompt(" Ingrese el decimo numero"))
alert ("El numero de telefono es: ( " +telefono+t1+t2+" ) " +t3+t4+t5+"-"+t6+t7+t8+t9 )
}
        
function Ejercicio14(){


//Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
JavaScript
function mayorDeCadaMatriz(matrices) {
  // Declaramos las variables necesarias
  let matrizDeMayores = [];

  // Iteramos sobre las matrices
  for (let matriz of matrices) {
    // Obtenemos el mayor número de la matriz
    let mayor = Math.max(...matriz);

    // Añadimos el mayor a la matriz de mayores
    matrizDeMayores.push(mayor);
  }

  // Devolvemos la matriz de mayores
  return matrizDeMayores;
}}


function Ejercicio15(){
//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
    let array = ["hola", "me", "he", "comprado", "un", "coche", "comprimido"];
let word = "compr";

let indexMatches = []
for (let i = 0; i < array.length; i++) {
  if (array[i].includes(word) == true) {
    indexMatches.push(i)
  }
}
console.log(indexMatches)
}

function Ejercicio16(){

    function objetoAMatriz(objeto) {
        // Declaramos las variables necesarias
        let matriz = [];
      
        // Iteramos sobre las propiedades del objeto
        for (let propiedad in objeto) {
          // Añadimos el par clave-valor a la matriz
          matriz.push([propiedad, objeto[propiedad]]);
        }
      
        // Devolvemos la matriz
        return matriz;
      }

}

function Ejercicio17(){
   // Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.


   function sumaPresupuestos(personas) {
    // Declaramos las variables necesarias
    let suma = 0;
  
    // Iteramos sobre las personas
    for (let persona of personas) {
      // Obtenemos el presupuesto de la persona
      let presupuesto = persona.presupuesto;
  
      // Sumamos el presupuesto a la suma
      suma += presupuesto;
    }
  
    // Devolvemos la suma
    return suma;
  }

  function Ejercicio18(){
   // Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

   getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]);["Becky", "John", "Steve"]
  
}}


function Ejercicio19(){//Escriba una función que convierta un objeto en una matriz de claves y valores.
    function objetoAMatrizClavesValores(objeto) {
        const matriz = [];
        for (const propiedad in objeto) {
          matriz.push([propiedad, objeto[propiedad]]);
        }
        return matriz;
      }

}function Ejercicio20(n){

    //Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.

    
        // Declaramos las variables necesarias
        let suma = 0;
      
        // Iteramos sobre los números desde 1 hasta n
        for (let i = 1; i <= n; i++) {
          // Sumamos el cuadrado del número a la suma
          suma += i * i;
        }
      
        // Devolvemos la suma
        return suma;
      }

function Ejercicio21(matriz){
//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada


  // Declaramos las variables necesarias
  let cantidadDeValores = matriz.length;

  // Iteramos sobre la matriz
  for (let i = 0; i < cantidadDeValores; i++) {
    // Multiplicamos el valor por la cantidad de valores
    matriz[i] *= cantidadDeValores;
  }

  // Devolvemos la matriz
  return matriz;
}

function Ejercicio22(){

//    Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

JavaScript
function contarDesde(numero) {
  // Declaramos las variables necesarias
  let matriz = [];

  // Iteramos sobre los números desde el número dado hasta cero
  for (let i = numero; i >= 0; i--) {
    // Añadimos el número a la matriz
    matriz.push(i);
  }

  // Devolvemos la matriz
  return matriz;
}}






function Ejercicio23(matriz){


   // Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
   
    let mayor = matriz[0];
    let menor = matriz[0];
  
    // Iteramos sobre la matriz
    for (let i = 1; i < matriz.length; i++) {
      // Actualizamos el mayor si es necesario
      if (matriz[i] > mayor) {
        mayor = matriz[i];
      }
  
      // Actualizamos el menor si es necesario
      if (matriz[i] < menor) {
        menor = matriz[i];
      }
    }
  
    // Devolvemos la diferencia
    return mayor - menor;
  }






  function Ejercicio24(matriz){

    let nuevaMatriz = [];
  
    // Iteramos sobre la matriz
    for (let valor of matriz) {
      // Comprobamos si el valor es un entero
      if (typeof valor === "number" && !isNaN(valor)) {
        // Añadimos el valor a la nueva matriz
        nuevaMatriz.push(valor);
      }
    }
  
    // Devolvemos la nueva matriz
    return nuevaMatriz;
  }
  
  function Ejercicio25(elemento,veces){
// Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.


    let matriz = [];
  
    // Iteramos la cantidad de veces especificada
    for (let i = 0; i < veces; i++) {
      // Añadimos el elemento a la matriz
      matriz.push(elemento);
    }
  
    // Devolvemos la matriz
    return matriz;
  }

  function Ejercicio26(vocal){
    //Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// Función para reemplazar las vocales de una cadena
function vreplace(vocal) {
    // Declaramos las variables necesarias
    const vocales = ["a", "e", "i", "o", "u"];
    const nuevaCadena = "";
  
    // Iteramos sobre la cadena original
    for (let i = 0; i < this.length; i++) {
      // Comprobamos si el carácter es una vocal
      if (vocales.includes(this[i])) {
        // Añadimos la vocal especificada a la nueva cadena
        nuevaCadena += vocal;
      } else {
        // Añadimos el carácter original a la nueva cadena
        nuevaCadena += this[i];
      }
    }
  
    // Devolvemos la nueva cadena
    return nuevaCadena;
  }
  
  // Añadimos la función al prototipo de cadena
  String.prototype.vreplace = vreplace;
  }
  

function Ejercicio27(cadenaDePalabras){
    
 
        const palabras = cadenaDePalabras.split(" ");
        let posicion = palabras.indexOf("Nemo");
      
        // Comprobamos si la palabra "Nemo" está en la cadena
        if (posicion === -1) {
          return "¡No encontré a Nemo!";
        }
      
        // Devolvemos la cadena con el mensaje
        return `¡Encontré a Nemo en la posición ${posicion + 1}!`;
      }







      function Ejercicio28(){
        

   

      let saludo = '¡Hola!';

      let primeraLetra = saludo[0].toUpperCase();
      
      console.log(primeraLetra);}
      // devuelve la letra 'H' en este caso