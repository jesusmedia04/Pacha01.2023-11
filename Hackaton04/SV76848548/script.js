function ejercicio01(){
    //Crea una función que retorne la suma de dos números.
    let n1 =parseInt(prompt( "Ingrese el primer numero"));
    let n2 =parseInt(prompt( "Ingrese el segundo numero"));
   
    alert("La suma es: "+(n1+n2))
}

function ejercicio02(){
    //Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
    let pt =parseInt(prompt( "Ingrese el numero de la potencia"));
    let n =parseInt(prompt( "Ingrese el numero para determinar la potencia"));
        
    n = ( n** pt);

    alert("La potencia de "+ pt +" del numero escogido es: " + n)
}

function ejercicio03(){
    //rea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

    let n1 =parseInt(prompt( "Ingrese el primer numero"));
    let n2 =parseInt(prompt( "Ingrese el segundo numero"));
    let n3 =parseInt(prompt( "Ingrese el tercer numero"));
    
    let result = sumOfCubes(n1,n2,n3)
   

    alert("La suma total de sus cubos es: " + result)
}

function ejercicio04(){
    //Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

    let base=prompt("Ingresa la base del triangulo")
    let altura= prompt(" Ingresa la altura del triangulo")
    
    let area = triArea(base,altura)
    alert(" El area del triangulo es: " +area)
}

function calculator(){
    //Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), 
    //y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

    let n1 = parseInt(prompt( "Ingrese el primer numero"));
    let operacion = prompt( "Ingrese operacion");
    let n2 = parseInt(prompt( "Ingrese el segundo numero"));
    let bandera = false
    let result = 0
    switch (operacion) {
        case '+':
            result = n1 + n2
            break;
        case '-':
            result = n1 - n2
            break;
        case '/':
            result = n1 / n2
            break;
        case 'x':
            result = n1 * n2
            break;
        case '%':
            result = n1 % n2
            break;
        default:
            bandera = true
            break;
    }

    if(bandera){
        alert("El parámetro no es reconocido")
    }else{
        alert("El resultado es: " +result)
    }
}

function ejercicio06(){
    //¿Cómo defines una función?
    //¿Hasta cuantos argumentos puedes declarar en una función?
    alert(" No existe un limite maximo para ingresar parámetros a una función")
}

const ejercicio07 = () => {
	//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
    let nombre = prompt("Ingrese su nombre: ");
    let apellido= prompt("Ingrese su apellido: ");
    let edad= prompt("Ingrese su edad: ");
    alert("Hola mi nombre es " +nombre+ " " + apellido+" y mi edad es " +edad);
}

function ejercicio08(){
    //Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

    let n1 =parseInt(prompt( "Ingrese el primer numero"));
    let n2 =parseInt(prompt( "Ingrese el segundo numero"));
    let n3 =parseInt(prompt( "Ingrese el tercer numero"));
    
    let result = sumOfCubes(n1,n2,n3)

    alert("La suma total de sus cubos es: " + result)
}

function ejercicio09(){
    //Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

    let n1 =prompt( "Ingrese algo")
   
    alert("Es de tipo:  " + (typeof n1))
}

function ejercicio10(){
    //Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

    let numeros = [1, 2, 3, 4, 5];  
   
    alert("La suma es:  " + suma(...numeros))
}

function ejercicio11(){
    //Crear una función que reciba un array de valores y filtre los valores que no son string

    let datos = [1, 'hola', '2s', 1.3];  
    let result = datos.filter(function(value) {
        return typeof value === "string";
    });
   
    alert(result)
}

function minMax(){
    //Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
    //minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

    const array=[23,5,8,3,97,245,1,4,5,7];

    let maxArray= Math.max(...array)
    let minArray=Math.min(...array)

    alert("El valor maximo es " + maxArray);
    alert("El valor minimo es: " + minArray);
}

function formatPhoneNumber(){
    //Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.

    const array=[3,5,8,3,7,5,1,4,5,7];

    alert ("El numero de telefono es: ( " +array[0]+array[1]+array[2]+" ) " +array[3]+array[4]+array[5]+"-"+array[6]+array[7]+array[8]+array[9] )
}

function findLargestNums(){
    //Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
   //findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

    const array=[4, 2, 7, 1];
    const array2=[20, 70, 40, 90];
    const array3= [1, 2, 0];
    let maxArray = []
    maxArray.push(Math.max(...array))
    maxArray.push(Math.max(...array2))
    maxArray.push(Math.max(...array3))

    alert(maxArray);
}

function charIndex(){
    //Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
    //charIndex("hello", "l") ➞ [2, 3]
    // The first "l" has index 2, the last "l" has index 3.

    let array = "hola mundo como estas";

    let letra = "m";

    let index = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(letra) == true) {
            index.push(i)
        }
    }

    alert(index);
}

function toArray(){
    //Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.

    let obj = { a: 1, b: 2 };

    let matriz = [];

    for (let p in obj) {
      matriz.push([p, obj[p]]);
    }
    
    alert(matriz);
}

function getBudgets(){
    //Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

    let matriz = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ]
      
    let suma = 0;

    for (let p of matriz) {
      let budget = p.budget;
      suma += budget;
    }
    
    alert(suma);
}

function getStudentNames(){
    //Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

    let matriz = [
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ]
    
    alert("no se entiende");
}

function objectToArray(){
    //Escriba una función que convierta un objeto en una matriz de claves y valores.

    let obj = {
        likes: 2,
        dislikes: 3,
        followers: 10
    }      
    
    let matriz = [];
    for (const p in obj) {
        matriz.push([p, obj[p]]);
    }

    alert(matriz);
}

function squaresSum(){
    //Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
    let n = 3
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }

    alert(suma);
}

function multiplyByLength(){
    //Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

    let matriz = [2, 3, 1, 0]

    for (let i = 0; i < matriz.length; i++) {
        matriz[i] *= matriz.length;
    }

    alert(matriz);
}

function countdown(){
    //Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

    let n = 5

    let matriz = [];

    for (let i = n; i >= 0; i--) {
        matriz.push(i);
    }

    alert(matriz);
}

function diffMaxMin(){
    //Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.

    let matriz = [10, 4, 1, 4, -10, -50, 32, 21]
    let maxArray = Math.max(...matriz)
    let minArray = Math.min(...matriz)

    let result = maxArray - minArray

    alert(result);
}

function filterList(){
    //Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros

    let matriz = [1, 2, 3, "x", "y", 10]
    let result = matriz.filter(function(value) {
        return Number.isInteger(value) === true
    });

    alert(result);
}

function repeat(){
    //Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, 
    //mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
    let n = 13
    let r = 5
    let matriz = []

    for (let i = 0; i < r; i++) {
      matriz.push(n);
    }

    alert(matriz);
}

function vreplace(){
    //Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.

}

function findNemo(){
    //Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!"
    let array = "I am finding Nemo !"
    let array2 = array.split(" ");
    console.log(array2)
    let palabra = "Nemo";
    let index = null

    array2.forEach( function(valor, indice, array) {
        if(valor == palabra){
            console.log(valor)
            index = indice + 1
         }
    });

    alert("esta en " + index)

}

function capLast(){
    //Cree una función que capitalice la última letra de cada palabra.

    let array = 'Hola';
    let letra = array[(array.length-1)].toUpperCase();

    alert(letra)

}


function suma(...n) {

    var total=0;  

    n.forEach(function(item){  
        total+=item;  
    });

    return total;  
}

function sumOfCubes(n1,n2,n3){
    //Cree una función que tome números y devuelva la suma de sus cubos.
    //sumOfCubes(1, 5, 9) ➞ 855
    // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    let result = Math.pow(n1,3) + Math.pow(n2,3) + Math.pow(n3,3)
    return result
}

function triArea(base,altura){
    return (base*altura)/2
}




