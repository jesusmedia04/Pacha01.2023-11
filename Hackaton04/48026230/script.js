
//1. Crea una función que retorne la suma de dos números.  

function sumaDosNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function ejercicio01() {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));

    let suma = sumaDosNumeros(numero1, numero2);
    
    alert(`La suma de los números es ${suma}`);
}


/*2. Crea una función que retorne la potencia de un número dado,
esta función deberá recibir la potencia y el número a potenciar. */

function calcularPotencia (base, exponente) {
    return Math.pow(base, exponente);
}
function ejercicio02 (){
    let numero1 = parseInt(prompt("Ingrese numero a potenciar"));
    let numero2 = parseInt(prompt("Ingrese la potencia"));

    let potencia = calcularPotencia(numero1,numero2);

    alert(`La potencia de ${numero1} elevado a ${numero2} es ${potencia}`);
}


/*3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */

function sumOfCubes(...numeros) {
    let sumaCubos = 0;
    for (let i = 0; i < numeros.length; i++ ){
        sumaCubos += Math.pow(numeros[i], 3)
    }
    return sumaCubos;
}
function ejercicio03 (){
    const input = prompt("Ingrese los números separados por coma para calcular la suma de sus cubos:");
    const numeros = input.split(",").map(Number);
    const resultado = sumOfCubes(...numeros);
    alert(`La suma de los cubos es: ${resultado}`);

}

/*4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3 */

function triArea(base,altura){
    return  base*altura/2;
}
function ejercicio04 () {
    let base = parseInt(prompt("Ingrese la base"));
    let altura = parseInt(prompt("Ingrese la altura"));

    let resultado =  triArea(base,altura) ;

    alert(`El area del triangulo es ${resultado}`)
}

/*5. Crea una función llamada calculator que recibe 3 parámetros, dos números y
una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 */

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
function ejercicio05 (){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let operacion = prompt("Elige la operacion que desea realizar (+,-,/,x,%) ");
    let num2 = parseInt(prompt("Ingrese el segundo numero"));

    let resultado = calculator(num1, operacion, num2);

    alert(`El resultado de la operacion es el siguiente: ${resultado}`);
}

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