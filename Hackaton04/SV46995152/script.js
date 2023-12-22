//1. Crea una función que retorne la suma de dos números.

function ejercicio01() {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));

    let suma = sumaDosNumeros(numero1, numero2);
    
    return alert(`La suma de los números es ${suma}`);
}
function sumaDosNumeros(numero1, numero2) {
    return numero1 + numero2;
}

/*2. Crea una función que retorne la potencia de un número dado,
esta función deberá recibir la potencia y el número a potenciar. */
function ejercicio02 (){
    let numero1 = parseInt(prompt("Ingrese numero a potenciar"));
    let numero2 = parseInt(prompt("Ingrese la potencia"));

    let potencia = calcularPotencia(numero1,numero2);

    alert(`La potencia de ${numero1} elevado a ${numero2} es ${potencia}`);
}
function calcularPotencia (base, exponente) {
    return Math.pow(base, exponente);
}

/*3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */
function ejercicio03 (){
    const input = prompt("Ingrese los números separados por coma para calcular la suma de sus cubos:");
    const numeros = input.split(",").map(Number);
    const resultado = sumOfCubes(...numeros);
    alert(`La suma de los cubos es: ${resultado}`);
}
function sumOfCubes(...numeros) {
    let sumaCubos = 0;
    for (let i = 0; i < numeros.length; i++ ){
        sumaCubos += Math.pow(numeros[i], 3)
    }
    return sumaCubos;
}

/*4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3 */
function ejercicio04 () {
    let base = parseInt(prompt("Ingrese la base"));
    let altura = parseInt(prompt("Ingrese la altura"));

    let resultado =  triArea(base,altura) ;

    alert(`El area del triangulo es ${resultado}`)
}
function triArea(base,altura){
    return  base*altura/2;
}


/*5. Crea una función llamada calculator que recibe 3 parámetros, dos números y
una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié
 un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 */
function ejercicio05 (){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let operacion = prompt("Elige la operacion que desea realizar (+,-,/,x,%) ");
    let num2 = parseInt(prompt("Ingrese el segundo numero"));

    let resultado = calculator(num1, operacion, num2);

    alert(`El resultado de la operacion es el siguiente: ${resultado}`);
}

function calculator(num1, operacion, num2) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "x":
            return num1 * num2;
        case "%":
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

// reto2
/*1) Utilizando función arrow, crear una función que reciba como parámetros un nombre,
apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” */

const concatenarDatos = () => {
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");
    const edad = parseInt(prompt("Ingrese su edad:"));

    const mensaje = `Hola, mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
    alert(mensaje);

    return mensaje;
};

/* 2) Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */

const sumOfCubes2 = () => {
    const input = prompt("Ingrese los números separados por coma para calcular la suma de sus cubos:");
    const numeros = input.split(",").map(Number);

    let sumaCubos = numeros.reduce((acumulador, numero) => {
        return acumulador + Math.pow(numero, 3);
    }, 0);

    alert(`La suma de los cubos es: ${sumaCubos}`);
    return sumaCubos;
};

/* 3) Crear una funcion que me retorne el tipo de valor entregado,
 invocar la función para los distintos tipos de js */

 function obtenerTipoDeValor() {
    const valor = prompt("Ingrese un valor para conocer su tipo:");
    let tipo;

    if (valor === null) {
        tipo = "null";
    } else if (isNaN(valor)) {
        if (valor === "true" || valor === "false") {
            tipo = "boolean";
        } else {
            tipo = "string";
        }
    } else {
        tipo = "number";
    }

    alert(`El tipo de valor ingresado es: ${tipo}`);
    return tipo;
}

/* 4) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest) */

function sumar(...numeros) {
    if (numeros.length === 0) {
        const entrada = prompt("Ingrese números separados por coma para sumar:");
        numeros = entrada.split(',').map(numero => parseFloat(numero.trim())).filter(numero => !isNaN(numero));
    }
    
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    alert(`La suma de los números es: ${suma}`);
    return suma;
}

/* 5) Crear una función que reciba un array de valores y filtre los valores que no son string*/

function filtrarStrings() {

    const filtrar = (args) => {
        let countNoString = 0;

        args.forEach(element => {
            if (typeof(element) !== "string") {countNoString++;}            
        });

        return countNoString;
      };
    let array = [1,2,"3",{"id":1,"nombre":"Mirko"},null,"Hola"];
    alert(`En el array [${array}] hay ${filtrar(array)} elementos no String`)
}

/* 6) Cree una función que tome una matriz de números y devuelva los números
mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]*/
function minMax() {
    const miarray = [23,5,8,3,97,245,1,4,5,7];
 
    // Utiliza Math.min y Math.max para encontrar los valores mínimo y máximo
    const min = Math.min(...miarray);
    const max = Math.max(...miarray);

    // Devuelve un array con los valores mínimo y máximo
    return alert([min, max]);
}

/* 7) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva
una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-78*/
function formatPhoneNumber() {
    const array = parseInt(prompt([1,2,3,4,5,6,7,8,9,0]));
    return alert(`(${array.slice(0, 3).join("")}) ${array.slice(3, 6).join("")}-${array.slice(6).join("")}`); 
}
  
/* 8) Cree una función que tome una matriz de matrices con números. Devuelve 
una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]*/

function findLargestNums() {

    const array=[4, 2, 7, 1];
    const array2=[20, 70, 40, 90];
    const array3= [1, 2, 0];
    let maxArray = []
    maxArray.push(Math.max(...array))
    maxArray.push(Math.max(...array2))
    maxArray.push(Math.max(...array3))

    alert(maxArray);
}

/* 9)  Dada una palabra, escriba una función que devuelva el primer índice y 
el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.*/

function charIndex() {
    const palabra = prompt('ingrese palabra');
    const caracter = prompt('ingrese letra');
    // Encuentra el primer índice del carácter
    const primerIndice = palabra.indexOf(caracter);

    // Si el carácter no está presente, devuelve un array vacío
    if (primerIndice === -1) {
        return alert([]);
    }

    // Encuentra el último índice del carácter
    const ultimoIndice = palabra.lastIndexOf(caracter);

    // Devuelve un array con el primer y último índice
    return alert([primerIndice, ultimoIndice]);
}

/* 10) Escriba una función que convierta un objeto en una matriz,
donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/

function toArray() {
    let objeto ={ a: 20, b: 30, c:'azucar' };
   
    // Utiliza Object.entries para obtener un array de pares clave-valor
    const arrayDeEntradas = Object.entries(objeto);

    // Utiliza map para convertir cada par clave-valor en un array
    const arrayResultado = arrayDeEntradas.map(par => [par[0], par[1]]);

    return alert(arrayResultado);
}

/* 11) Cree la función que toma una matriz con objetos y devuelve la suma de los 
presupuestos de las personas.
getBudgets([
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700 */

function getBudgets(personas) {
    let persona = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ]
    // Utiliza reduce para sumar los presupuestos de las personas
    const sumaPresupuestos = persona.reduce((acumulador, persona) => acumulador + persona.budget, 0);

    return alert(sumaPresupuestos);
}

/* 12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de 
nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
 */

function getStudentNames(estudiantes) {
    let estudiante = [
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ]
    // Utiliza map para obtener un array de nombres de estudiantes
    const nombres = estudiante.map(estudiante => estudiante.name);

    return alert(nombres);
}

/* 13) Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
likes: 2,
dislikes: 3,
followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]*/

function objectToArray(objeto) {
    
    let like = {"likes": 2};

    let dislikes = {"dislikes": 3};

    let followers = {"followers": 110};


    let lik = Object.entries(like);

    let disl=Object.entries(dislikes);

    let foll=Object.entries(followers);


    alert(`la matriz es [ ${lik}] , [${disl} ] , [${foll} ] `)
}


/* 14) Cree una función donde, dado el número n, devuelva la suma de todos
los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
1² + 2² + 3² =
1 + 4 + 9 =
14 */

function squaresSum(n) {

    const squaresSum = (n)=>{
        return n*(n+1)*((2*n)+1)/6;
    };
    let num = parseInt(prompt('ej14num'));
    let sumaString = "";
    for (let i = 0; i < num; i++) {
        if(i===num-1){
            sumaString += `${(i+1)}^2`
        }
        else{
            sumaString += `${(i+1)}^2 + `
        }
    };
    alert(`la suma de ${sumaString} es ${squaresSum(num)}`);
}

/* 15) Cree una función para multiplicar todos los valores en una matriz por la 
cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]*/

function multiplyByLength(array) {
  
    const multiplyByLength = (array) =>{
        return array.map(e=>e*array.length);
    };
    let n = 0;
    let count = 0;
    let numeros=[];
    while(n>=0){
        n = parseInt(prompt(`Ingrese el N°${count+1}:`));    
        if(n>=0){
            numeros.push(n);
            count++;
        }
    }
    alert(`El array [${numeros}] cada elemento se multiplicara por ${numeros.length}\nEl array resultante es: [${multiplyByLength(numeros)}]`);
}

/* 16) Cree una función que tome un número como argumento y devuelva 
una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]*/

function countdown(numero) {
  
    const countdown = (n) =>{
        let array = [];
        for (let i = n; i >= 0; i--) {
            array.push(i);
        };
        return array;
    };
    let n = parseInt(prompt(`Ingrese un número:`));    
    alert(`El aray resultante es: [${countdown(n)}]`);
}

/* 17) Cree una función que tome una matriz y devuelva la diferencia entre 
los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.*/

function diffMaxMin(arr) {
  
    const diffMaxMin = (args) => {
        let nMax = args[0];
        let nMin = args[0];
        for(let i=0;i<args.length;i++){
            if(args[i]>nMax){
                nMax = args[i];
            }else{
                nMin = args[i];
            }
        }
        return [nMax,nMin,(nMax-nMin)];
      };
    let n = 0;
    let numeros = [];
    while(!isNaN(n)){
        n = prompt(`Ingrese el N°${numeros.length+1} (para salir ingrese cualquier caracter no númerico):`);
        if(!isNaN(n)){
            numeros.push(n);
        }
    }
    resultado = diffMaxMin(numeros);
    alert(`En el array [${numeros}] el mayor es "${resultado[0]}" y el menor es "${resultado[1]}, su diferencia es ${resultado[2]}"`)

}

/* 18) Cree una función que filtre las cadenas de una matriz y devuelva 
una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]*/

function filterList(arr) {
    const filterList = (...array)=>{
        let res = [];
        array.forEach(e=>{
            if(!isNaN(e)){
                res.push(e);
            };
        });
        return res;
    };
    let n = "";
    let valores = [];
    while(n.toLowerCase()!=="stop"){
        n = prompt(`Ingrese elemento N°${valores.length+1} (para salir ingrese la palabra 'stop':`);
        if(!isNaN(n)){
            valores.push(parseInt(n));
        }else if(n.toString().toLowerCase()!=="stop"){
            valores.push(n);
        }
        
    }
    alert(`En el array [${valores}] los números enteros son [${filterList(...valores)}]"`)
}

/* 19) Cree una función que tome dos argumentos (elemento, tiempos).
El primer argumento (elemento) es el elemento que necesita repetirse,
mientras que el segundo argumento (veces) es la cantidad de veces 
que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13] */

function repeat(elemento, veces) {
    
    const repeat = (element,times) => {
        let res = [];
        for (let i = 0; i < times; i++) {
            res.push(element);
        }
        return res;
    };
    try {
        elemento = parseInt(prompt('ingrese numero'));
        veces = parseInt(prompt('ingrese nuemro de veces'));
        if(veces<=0 || elemento.length===0) throw new Error("No se aceptan nulos o cero");
        alert(`El elemento "${elemento}" se repetira ${veces} veces(vez): [${repeat(elemento,veces)}]`)
        document.getElementById('ej19input').value="";
        document.getElementById('ej19veces').value=1;
    } catch (error) {
        alert(error.message);
    }
}

/* 20) Escriba una función, .vreplace () que extienda el prototipo de 
cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus" */

function ejercicio20() {
    String.prototype.vreplace = function (vocal) {
        return this.replace(/[aeiou]/gi, vocal);
    };
    try {
        let cadena = prompt("Ingrese una palabra u oración:");
        let letra = prompt("Ingrese una vocal:");
        if(letra.length>1 || !"aeiou".includes(letra.toLowerCase())) throw new Error("No se acepta mas de un caracter ni consonantes!");
        alert(cadena.vreplace(letra));
    } catch (error) {
        alert(error.message);
    }
}

/* 21) Te dan una cadena de palabras. Debe encontrar la palabra 
"Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en 
[el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
 */

function findNemo(cadena) {
    
    const findNemo = (cadena) =>{
        let array =cadena.split(" ");
        return array.indexOf("Nemo")+1;
    };
    let oracion = prompt("ingrese el texto:");
    alert(`En la frase "${oracion}" la palabra "Nemo" se encuentra en la posición ${findNemo(oracion)}!`)

}

/* 22) Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO" */


function capLast(cadena) {
    try {
        const capLast = (cadena)=>{
            return cadena.toLowerCase().split(" ").map(
                function(e){
                    return e.slice(0,-1) + e.slice(-1).toUpperCase();
                }
                ).join(" ");
        };
        var frase = prompt("Ingrese una frase");
        if(frase.length===0) throw new Error("No se aceptan nulos!");
        alert(`original: ${frase}\nresultado: ${capLast(frase)}`);
    } catch (error) {
        alert(error.message);
    }

}


