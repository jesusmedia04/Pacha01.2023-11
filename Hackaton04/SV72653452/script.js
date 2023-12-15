
function ejercicio01()
{

class Calculadora 
{
    
    constructor(num1, num2) 
    {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    
    sumar()
     {
      return this.num1 + this.num2;
    }
  }
  
let numero1 = parseFloat(prompt("Ingrese primer numero para la suma :"));

let numero2 = parseFloat(prompt("Ingrese segundo numero para la suma :"));

 
  let miCalculadora = new Calculadora(numero1, numero2);
  let resultado = miCalculadora.sumar();
  alert("El resultado de la suma es = " + resultado); 
}


function ejercicio02()
{

class CalculadoraPotencia 
{
 
  constructor(base, exponente) 
  {
    this.base = base;
    this.exponente = exponente;
  }

  
  calcularPotencia() 
  {
    
    return this.base ** this.exponente;
  }
}

let ponerbase = parseFloat(prompt("Ingrese la base : "));

let ponerexponente = parseInt(prompt("Ingrese el exponente:"));

let miCalculadora = new CalculadoraPotencia(ponerbase, ponerexponente);
let resultado = miCalculadora.calcularPotencia();
alert("La potencia  es : " + resultado); 



}



function ejercicio03()
{
  class CalculadoraCubos
   {
    
    constructor(...numeros) 
    {
      this.numeros = numeros;
    }
  
    
    sumarCubos() 
    {
      return this.numeros.reduce((sumartodos, numerosactuales) => sumartodos + Math.pow(numerosactuales, 3));
    }
  }
  
let numero1 = parseFloat(prompt("Primer numero EJEMPLO : 1 . Ingrese primer numero :"));

let numero2 = parseFloat(prompt("Primer numero EJEMPLO : 5 . Ingrese segundo numero :"));  

let numero3 = parseFloat(prompt("Primer numero EJEMPLO : 9 . Ingrese tercer numero :"));



  let miCalculadoraCubos = new CalculadoraCubos(numero1, numero2, numero3);
  let resultadoCubos = miCalculadoraCubos.sumarCubos();
  alert("Resultado de ejemplo : 855 .El resultado de la suma de sus cubos es : " + resultadoCubos); 
}

function ejercicio04()
{

  class Triangulo {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  }
  
let nuevabase = parseFloat(prompt("Ejemplo de base 3 . Ingrese base del triangulo : "))

  
let nuevaltura = parseFloat(prompt("Ejemplo de altura 2 .Ingrese altura del triangulo : "))

  let miTriangulo = new Triangulo(nuevabase, nuevaltura);
  let resultadoArea = miTriangulo.calcularArea();
  alert("Resultado de ejemplo : 3 . Resultado de area : " + resultadoArea); // 





}



function ejercicio05()
{

  class Calcular 
  {
    constructor() 
    {

      this.num1 = parseFloat(prompt("Ingrese el primer número:"));
      this.operacion = prompt("Ingrese la operación (+, -, /, x, %):");
      this.num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }
  
    calcularResultado() 
    {
      switch (this.operacion) 
      {
        case "+":
          return this.num1 + this.num2;
        case "-":
          return this.num1 - this.num2;
        case "/":
          return this.num1 / this.num2;
        case "x":
          return this.num1 * this.num2;
        case "%":
          return this.num1 % this.num2;
        default:
          return "El parámetro no es reconocido";
      }
    }
  }
  
  
  let miCalculadora = new Calcular();
  let resultado = miCalculadora.calcularResultado();
  alert("La respuest a la opercaion es : " + resultado);




}

function Pregunta1 ()
{
alert("¿Cómo defines una función?")

alert("Se debe utilizar la palabra function, seguido del nombre de la función, se debe poner una lista de parámetros (encerrados entre paréntesis) y un bloque de código  ")


}



function Pregunta2 ()
{

  alert("¿Hasta cuantos argumentos puedes declarar en una función?")

  alert("Es ilimitada sobretodo si declaras variables con la funcion rest parameters ")
  
  
  
}


function Documentoejercicio1 ()
{

//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

class Persona 
{
  constructor(nombre, apellido, edad) 
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  obtenerSaludo()
   {
    return `Hola, mi nombre es ${this.nombre} ${this.apellido} y mi edad es ${this.edad}`;
  }
}


let nombre = prompt("Ingrese su nombre :");
let apellido = prompt("Ingrese su apellido :");
let edad = parseFloat(prompt("Ingrese su edad :"));


let infosaludo = new Persona(nombre, apellido, edad);


let mensajeSaludo = infosaludo.obtenerSaludo();
alert(mensajeSaludo);


}


function Documentoejercicio2 ()
{

alert("Ejercicio repetido. Ejercicio ya resuelto")
  
}



function Documentoejercicio3 ()
{
//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js



}

function Documentoejercicio4 ()
{
//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
  
class Sumadora {
  constructor(...numeros) {
    this.numeros = numeros;
  }

  sumar() {
    return this.numeros.reduce((total, numero) => total + numero, 0);
  }
}


let numerosIngresados = prompt("Ingrese números separados por suma (por ejemplo: 1 + 2 + 3):");


let arrayNumeros = numerosIngresados.split('+').map(numero => parseFloat(numero.trim()));


let sumadoraPersonalizada = new Sumadora(...arrayNumeros);


let resultadoSuma = sumadoraPersonalizada.sumar();
alert(`La suma de los números ingresados es: ${resultadoSuma}`);
}


function Documentoejercicio5 ()
{

  //Crear una función que reciba un array de valores y filtre los valores que no son string
  class FiltroCadenas {
    constructor(array) {
      this.array = array;
    }
  
    filtrar() {
      return this.array.filter(valor => typeof valor === 'string');
    }
  }
  
  alert("Array = 1, dos,3, cuatro, cinco, 6")

  let miArray = [1, 'dos', 3, 'cuatro', 'cinco', 6];
  let filtro = new FiltroCadenas(miArray);
  let resultadoFiltrado = filtro.filtrar();
  
  alert("Resultado de filtro de array : " + resultadoFiltrado);
  
  
}



function Documentoejercicio6 ()
{

//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.minMax([1, 2, 3, 4, 5]) ➞ [1, 5]


class MinimoyMaximo {
  constructor(...numeros) {
    this.numeros = numeros;
  }

  encontrarMinMax() {
    let minimo = Math.min(...this.numeros);
    let maximo = Math.max(...this.numeros);
    return [minimo, maximo];
  }
}


let entradaNumeros = prompt("Ingrese números separados por coma (por ejemplo: 1, 2, 3):");


let arrayNumeros = entradaNumeros.split(',').map(numero => parseFloat(numero.trim()));


let minMaxFinder = new MinimoyMaximo(...arrayNumeros);


let resultado = minMaxFinder.encontrarMinMax();
alert("Numero menor y mayor es : " + resultado);

  
}


function Documentoejercicio7 ()
{
//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

class FormatoNumeroTelefono 
{
  constructor(...numeros) 
  {
    if (numeros.length !== 10) 
    {
      throw new Error("Debe ingresar exactamente 10 enteros.");
    }

    this.numeros = numeros;
  }

  formatPhoneNumber()
   {
    const numeroTelefono = `(${this.numeros.slice(0, 3).join('')}) ${this.numeros.slice(3, 6).join('')}-${this.numeros.slice(6).join('')}`;
    return numeroTelefono;
  }
}


let entradaNumeros = prompt("Ingrese 10 números (por ejemplo: 1,2,3, 4, 5, 6, 7, 8, 9, 0):");


let arrayNumeros = entradaNumeros.split(",").map(numero => parseInt(numero.trim(), 10));



  let formatter = new FormatoNumeroTelefono (...arrayNumeros);
  let numeroTelefonoFormateado = formatter.formatPhoneNumber();

  alert(numeroTelefonoFormateado);

  


  
}



function Documentoejercicio8 ()
{

  //Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

  class NumeromasLargo 
  {
    constructor(...matrices) 
    {
      this.matrices = matrices;
    }
  
    encontrarMayores() 
    {
      let mayores = this.matrices.map(submatriz => Math.max(...submatriz));
      return mayores;
    }
  }
  
  
  let entradaMatrices = prompt("Ingrese las matrices de números separadas por coma y cada número separado por espacio (por ejemplo: 4 2 7 1, 20 70 40 90, 1 2 0):");
  
  
  let matrices = entradaMatrices.split(',').map(matriz => matriz.split(' ').map(numero => parseInt(numero.trim(), 10)));
  
  
 
    let finder = new NumeromasLargo(...matrices);
    let mayoresEncontrados = finder.encontrarMayores();
    alert("Los numeros mayores de cada matriz que proporcionó son :" + mayoresEncontrados);
    
  
}


function Documentoejercicio9 ()
{
//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.


  class EncontrarIndice {
    constructor(palabra, caracter) {
      this.palabra = palabra;
      this.caracter = caracter;
    }
  
    encontrarIndices() {
      let indices = [];
      for (let i = 0; i < this.palabra.length; i++) {
        if (this.palabra[i] === this.caracter) {
          indices.push(i);
        }
      }
      return indices;
    }
  }
  
  
  let palabraUsuario = prompt("Ingrese una palabra (por ejemplo: hello):");
  let caracterUsuario = prompt("Ingrese un carácter(por ejemplo : l):");
  
  
  let finder = new EncontrarIndice(palabraUsuario, caracterUsuario);
  let indicesEncontrados = finder.encontrarIndices();
  
  alert("Resultado de ejemplo : 2,3 . Resultado de informacion recibida : " + indicesEncontrados);
  
  
}



function Documentoejercicio10 ()
{

//Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

class ObjetoaMatriz {
  constructor(objeto) {
    this.objeto = objeto;
  }

  convertirArray() {
    let resultado = [];
    for (let clave in this.objeto) {
      resultado.push([clave, this.objeto[clave]]);
    }
    return resultado;
  }
}

// Objeto de ejemplo
let objetoEjemplo = {
  "a": 42,
  "b": "Hola",
  "c": true,
  "d": [1, 2, 3],
  "e": {
    "x": 10,
    "y": 20
  }
};


let converter = new ObjetoaMatriz (objetoEjemplo);
let arrayResultado = converter.convertirArray();

alert(" a : 42, b : hola, c : true, d : 1,2,3 , e : x=10,y=20")

alert(arrayResultado);
// Salida esperada: [["a", 42], ["b", "Hola"], ["c", true], ["d", [1, 2, 3]], ["e", { "x": 10, "y": 20 }]]
 

}


function Documentoejercicio11 ()
{

//Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

/*getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700
*/

class CalculadordePresupuesto 
{
  constructor(personas) 
  {
    this.personas = personas;
  }

  calcularSumaPresupuestos()
   {
    let sumaPresupuestos = 0;
    for (let persona of this.personas) 
    {
      sumaPresupuestos += persona.budget;
    }
    return sumaPresupuestos;
  }
}


let personas = [];

for (let i = 0; i < 3; i++) 
{
  let nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
  let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`), 10);
  let presupuesto = parseInt(prompt(`Ingrese el presupuesto de ${nombre}:`), 10);

  personas.push({ name: nombre, age: edad, budget: presupuesto });
}


let calculator = new CalculadordePresupuesto (personas);
let sumaPresupuestos = calculator.calcularSumaPresupuestos();

alert(sumaPresupuestos);


}


function Documentoejercicio12 ()
{
//Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
/*getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
*/

class NombresdeEstudiantes
 {
  constructor() 
  {
    this.estudiantes = [];
  }

  agregarEstudiante(nombre)
   {
    this.estudiantes.push({ name: nombre });
  }

  obtenerNombresEstudiantes()
   {
    return this.estudiantes.map(estudiante => estudiante.name);
  }
}


let extractor = new NombresdeEstudiantes();


for (let i = 0; i < 3; i++) 
{
  let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
  extractor.agregarEstudiante(nombre);
}


let nombresEstudiantes = extractor.obtenerNombresEstudiantes();
alert(nombresEstudiantes);

  
}



function Documentoejercicio13 ()
{
//Escriba una función que convierta un objeto en una matriz de claves y valores.
/*objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/

class ConvertirObjetoaArray
{
  constructor()
   {
    this.valores = {};
  }

  agregarValor(clave, valor) 
  {
    this.valores[clave] = valor;
  }

  convertirAArray() 
  {
    return Object.entries(this.valores);
  }
}


let converter = new ConvertirObjetoaArray();


let claves = ["likes", "dislikes", "followers"];
for (let clave of claves) 
{
  let valor = parseInt(prompt(`Ingrese el valor para ${clave}:`), 10);
  converter.agregarValor(clave, valor);
}


let arrayResultado = converter.convertirAArray();
alert(arrayResultado);


  
}




function Documentoejercicio14 ()
{
//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

class SumadeCuadrados 
{
  constructor(n) 
  {
    this.n = n;
  }

  calcularSumaCuadrados()
   {
    let sumaCuadrados = 0;
    for (let i = 1; i <= this.n; i++) 
    {
      sumaCuadrados += i ** 2;
    }
    return sumaCuadrados;
  }
}


let n = parseInt(prompt("Ingrese un número para calcular la suma de cuadrados:"), 10);

let calculator = new SumadeCuadrados (n);
let sumaCuadrados = calculator.calcularSumaCuadrados();

alert("La suma de sus cuadrados es : " + sumaCuadrados);


  
}




function Documentoejercicio15 ()
{

  //Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

class MultiplicadordeArray {
  constructor() {
    this.arr = [];
  }

  agregarValor(valor) {
    this.arr.push(valor);
  }

  multiplicarPorLongitud() {
    return this.arr.map(valor => valor * this.arr.length);
  }
}


let multiplier = new MultiplicadordeArray();


for (let i = 0; i < 4; i++) {
  let valor = parseInt(prompt(`Ingrese el valor ${i + 1}:`), 10);
  multiplier.agregarValor(valor);
}


let arrayResultado = multiplier.multiplicarPorLongitud();
alert(arrayResultado);


  
}




function Documentoejercicio16 ()
{

  //Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

class CuentaRegresiva 
{
  constructor(numero) 
  {

    this.numero = numero;
  }

  generarConteoRegresivo()
   {
    let resultado = [];
    for (let i = this.numero; i >= 0; i--) 
    {
      resultado.push(i);
    }
    return resultado;
  }
}


let numeroInicial = parseInt(prompt("Ingrese un número para el conteo regresivo:"), 10);

let generator = new CuentaRegresiva (numeroInicial);
let resultadoConteoRegresivo = generator.generarConteoRegresivo();

alert(resultadoConteoRegresivo);

  
}




function Documentoejercicio17 ()
{
//Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

class DiferenciarMaxyMin
{
  constructor() 
  {
    this.matriz = [];
  }

  agregarNumero(numero) 
  {
    this.matriz.push(numero);
  }

  calcularDiferenciaMaxMin() 
  {
    let maximo = Math.max(...this.matriz);
    let minimo = Math.min(...this.matriz);
    return maximo - minimo;
  }
}


let calculator = new DiferenciarMaxyMin();


for (let i = 0; i < 8; i++) 
{
  let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`), 10);
  calculator.agregarNumero(numero);
}


let resultadoDiferenciaMaxMin = calculator.calcularDiferenciaMaxMin();
alert("Resultado de la diferencia entre el menor y mayor numero recibido : " + resultadoDiferenciaMaxMin);

  
}




function Documentoejercicio18 ()
{
//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

class FiltradordeEnteros 
{
  constructor() 
  {
    this.matriz = [];
  }

  agregarElementos(elementos) 
  {
    this.matriz = elementos.map(elemento => isNaN(elemento) ? elemento : parseInt(elemento, 10));
  }

  filtrarEnteros()
   {
    return this.matriz.filter(elemento => typeof elemento === 'number' && Number.isInteger(elemento));
  }
}


let filter = new FiltradordeEnteros ();


let entradaUsuario = prompt("Ingrese números y letras separados por comas (por ejemplo, 1,2,x,y,10):");
let elementos = entradaUsuario.split(",");


filter.agregarElementos(elementos);


let resultadoFiltrado = filter.filtrarEnteros();
alert("Los numeros enteros son : " + resultadoFiltrado);
  
}




function Documentoejercicio19 ()
{
//Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]

class Repetidor 
{
  constructor() 
  {
    this.elemento = null;
    this.veces = null;
  }

  establecerElementoYVeces(elemento, veces) 
  {
    this.elemento = elemento;
    this.veces = veces;
  }

  generarRepeticion() 
  {
    return Array(this.veces).fill(this.elemento);
  }
}


let generador = new Repetidor ();


let elemento = parseInt(prompt("Ingrese el elemento a repetir:"), 10);
let veces = parseInt(prompt("Ingrese el número de repeticiones:"), 10);


generador.establecerElementoYVeces(elemento, veces);


let resultadoRepeticion = generador.generarRepeticion();
alert(resultadoRepeticion);
  
}




function Documentoejercicio20 ()
{
//Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

class VReplace 
{
  constructor() 
  {
    this.cadena = null;
    this.vocalReemplazo = null;
  }

  establecerCadenaYVocal(cadena, vocalReemplazo)
   {
    this.cadena = cadena;
    this.vocalReemplazo = vocalReemplazo;
  }

  reemplazarVocales() 
  {
    if (!this.cadena || !this.vocalReemplazo) 
    {
      console.log("Por favor, establezca la cadena y la vocal de reemplazo.");
      return null;
    }

    let regexVocales = /[aeiouAEIOU]/g;
    return this.cadena.replace(regexVocales, this.vocalReemplazo);
  }
}


let vReplacer = new VReplace();


let cadena = prompt("Ingrese la oracion o palabra:");
let vocalReemplazo = prompt("Ingrese la vocal que desea extender:");


vReplacer.establecerCadenaYVocal(cadena, vocalReemplazo);


let resultadoReemplazo = vReplacer.reemplazarVocales();
alert(resultadoReemplazo);

  
}


function Documentoejercicio21 ()
{
//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

class BuscandoaNemo 
{
  constructor() 
  {
    this.cadena = null;
  }

  establecerCadena(cadena) 
  {
    this.cadena = cadena;
  }

  encontrarNemo() 
  {
    if (!this.cadena) 
    {
      console.log("Por favor, establezca la cadena.");
      return null;
    }

    let palabras = this.cadena.split(" ");
    let indiceNemo = palabras.findIndex(palabra => palabra.toLowerCase() === "nemo");

    if (indiceNemo !== -1) 
    {
      return `Encontre a Nemo en la palabra : ${indiceNemo + 1}!`;
    } else 
    {
      return "¡No se encontró a Nemo!";
    }
  }
}


let nemoFinder = new BuscandoaNemo ();


let cadena = prompt("Ingrese la oracion que debe de contener la palabra (Nemo)  :");
nemoFinder.establecerCadena(cadena);


let resultadoEncontrarNemo = nemoFinder.encontrarNemo();
alert(resultadoEncontrarNemo);

  
}



function Documentoejercicio22 ()
{

//Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"

class UltimaPlabraMayuscula 
{
  constructor()
   {
    this.cadena = null;
  }

  establecerCadena(cadena) 
  {
    this.cadena = cadena;
  }

  capitalizarUltimaLetra() 
  {
    if (!this.cadena) 
    {
      console.log("Por favor, establezca la cadena.");
      return null;
    }

    let palabras = this.cadena.split(" ");
    let palabrasCapitalizadas = palabras.map(palabra => 
    {
      if (palabra.length > 0) 
      {
        let ultimaLetra = palabra.slice(-1).toUpperCase();
        return palabra.slice(0, -1) + ultimaLetra;
      } else {
        return palabra;
      }
    });

    return palabrasCapitalizadas.join(" ");
  }
}


let capitalizer = new UltimaPlabraMayuscula ();


let cadena = prompt("Ingrese una oracion o una palabra:");
capitalizer.establecerCadena(cadena);


let resultadoCapitalizarUltimaLetra = capitalizer.capitalizarUltimaLetra();
alert(resultadoCapitalizarUltimaLetra);
  
}

