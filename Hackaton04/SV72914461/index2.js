//Crea una función que retorne la suma de dos números.
function sumar(sum1, sum2)
{
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}
alert("12 + 25 = "+ sumar(12, 25) );

//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

let elevado = Math.pow(5,3);
alert(elevado)

// Crea una función que tome números y devuelva la suma de sus 
//cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(n)  
{  
    let elevado = Math.pow(1,3);
    let elevado1 = Math.pow(5,3);
    let elevado2 = Math.pow(9,3);
    let resultado2;
    resultado2 = elevado+elevado1+elevado2;
    return resultado2;

}
    alert("El resultado de la suma de sus cubos es : " +sumOfCubes())

//Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

function areatriangulo(n){

let base=3;
let altura=2;
let resultado3;
resultado3=base*altura/2;
return resultado3;

}
alert("El area del trigungulo es : " +areatriangulo());

//Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), 
//y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4




let operador = prompt('Que operacion desea hacer 1=Sumar, 2=Restar, 3=Multiplicar, 4=Dividir');
let numero1 = Number( prompt('Escribe el primero numero'))
let numero2 = Number( prompt('Escribe el segundo numero'))

let total;

if (operador== 1){
    total=numero1+numero2
    alert('El resultado de la suma es de ' +total)
}else if(operador== 2){
    total=numero1-numero2
    alert('El resultado de la resta es de ' +total)

}else if(operador== 3){
    total=numero1*numero2
    alert("El resultado de la multiplicacion es de "+total)

}else if(operador== 4){
    total=numero1/numero2
    alert("El resultado de la division es de "+total)
}else{
    alert("La operacion es incorrecta")
}


//Preguntas.

// 1. ¿Cómo defines una función?
//Usamos la palabra reservada Function

// 2. ¿Hasta cuantos argumentos puedes declarar en una función?
//Una funcion puede tener 255 argumentos.


//RETO 

//1.	Utilizando función arrow, crear una función que reciba como parámetros un 
//nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es 
//sebastián yabiku y mi edad 33”


let nombre = prompt("Como se llama");
let año = prompt("Cuantos años tiene");


let Biemvenido =() => '¡Hola!' 
  alert('¡Hola!'  +  nombre + ' Tu tienes ' + año + ' años  ',Biemvenido()) 

//2.	Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(n)  
{  
    let elevado = Math.pow(1,3);
    let elevado1 = Math.pow(5,3);
    let elevado2 = Math.pow(9,3);
    let resultado2;
    resultado2 = elevado+elevado1+elevado2;
    return resultado2;

}
    alert("El resultado de la suma de sus cubos es : " +sumOfCubes())

  
//3Crear una funcion que me retorne el tipo de valor entregado, 
//invocar la función para los distintos tipos de js


//4.Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  alert(sum(1, 2, 3,15,25,80,90,80,90));
  
  
  alert(sum(1, 2, 3, 4,5,6,7,8,9,10,11,12,13));

  //5.	Crear una función que reciba un array de valores y filtre los valores que no son string

 


 // 6.	Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

let numeros3 = [1,2,3,4,5];

alert(`El valor minimo de la matriz es ${Math.min(...numeros3)}`);
alert(`El valor Maximo de la matriz es ${Math.max(...numeros3)}`);


//7. una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//crformatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"Escriba


//8.	Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

let arra1 = [4, 2, 7, 1];
let arra2 = [20, 70, 40, 90];
let arra3 = [1, 2, 0];
let max = Math.max(...arra1);
let max1 = Math.max(...arra2);
let max2 = Math.max(...arra3);

alert(`la matriz es [ ${max},${max1},${max2} ] `);

// 9.Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.


const nombre2 ='hello'

const primero = nombre2.charAt(2)
alert(primero)

const ultimo = nombre2.charAt(4)
alert(ultimo)

const porDefecto =  nombre2.charAt()
alert


// 10.	Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

let valores1 = {
	"a": 1
		
};

let valores2 = {
	"b": 2
};


let claves = Object.entries(valores1);

let claves2=Object.entries(valores2);

alert(`la matriz es [ ${claves}] , [${claves2} ] `);

// 11.	Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

//getBudgets([
    //{ name: "John", age: 21, budget: 23000 },
   // { name: "Steve",  age: 32, budget: 40000 },
   // { name: "Martin",  age: 16, budget: 2700 }
 // ]) ➞ 65700


 getBudgets = [
    {name: "John", age: 21, budget: 23000},
    {name: "Steve",  age: 32, budget: 40000},
    { name: "Martin",  age: 16, budget: 2700 },
   
  ];
  const sumall =   getBudgets.map(item => item.budget).reduce((prev, curr) => prev + curr, 0);
  alert(sumall);

 

 //12.	Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
 ///¿getStudentNames([
 //  { name: "Steve" },
  // { name: "Mike" },
  // { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

let StudentNames ={
         name5 : "Becky",
         name1 : "jhon"  ,
         name3: "steve" 

};

let claves8 = Object.values(StudentNames);
alert(claves8);



//13.	Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
 // likes: 2,
 // dislikes: 3,
 // followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]



let like = {
	"likes": 2
		
};

let dislikes = {
	"dislikes": 3
};

let followers = {
	"followers": 110
};


let lik = Object.entries(like);

let disl=Object.entries(dislikes);

let foll=Object.entries(followers);


alert(`la matriz es [ ${lik}] , [${disl} ] , [${foll} ] `);





//14.	Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14









//15.	Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

