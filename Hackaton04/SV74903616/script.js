function ejercicio01() {
    //Crea una función que retorne la suma de dos números.
   
    let numero1 = parseInt(prompt("Escribe el primer numero: "))
    let numero2 = parseInt(prompt("Escribe el segundo numero: "))


    if (isNaN(numero1) || isNaN(numero2)) {

        alert("Error: Ingrese NUMEROS!.")
    } else {
        let suma = numero1 + numero2;
        alert("La suma es: " + suma)
    }
}
  //
  //
  //
function ejercicio02() {
    // crea una función que retorne la potencia de un número dado.
    //esta función deberá recibir la potencia y el número a potenciar.
    let num = parseInt(prompt("Escriba la base : "))
    let exp = parseInt(prompt("Escriba el exponente : "))

    let pot = (num ** exp) ;

    return alert(" La potencia  es: " + pot)
}
 //
 //
 //

function ejercicio03() {
    //Crea una función que tome números y devuelva la suma de sus cubos. 
    //sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    const cantidadNumeros = prompt("Ingrese la cantidad de números:");
    let sumaCubos = 0;


    for (let i = 0; i < cantidadNumeros; i++) {

        const numero = prompt(`Ingrese el número #${i + 1}:`);
        const cubo = Math.pow(Number(numero), 3);
        sumaCubos += cubo;
    }

    return alert("La suma de cubos es: " + sumaCubos);
    
}

 

 //
 //
 //

 function ejercicio04() 
 {
     let base = parseInt(prompt("Escriba la base : "))
     let altura = parseInt(prompt("Escriba la altura : "))

     let area = (base * altura) / 2;

     return alert("El area del triangulo es: " + area)
}


//
//
//

function ejercicio05() {
    // Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let operacion = parseInt(prompt("Ingrese la operacion: "));
    let num2 = parseInt(prompt("Ingrese el segundo  numero: "));

    switch (operacion) {
        case "+":
            suma = num1 + num2;

            return alert(num1 + "+" + num2 + "=" + suma);
        case "-":
            rest = num1 - num2;
           return alert(num1 + "-" + num2 + "=" + rest);

        case "*":
            mult = num1 + num2;
            alert(num1 + "*" + num2 + "=" + mult);
        case "/":
            divi = num1 / num2;
            alert(num1 + "/" + num2 + "=" + divi);
        case "%":
            xd = num1 % num2;
            alert(num1 + "%" + num2 + "=" + xd);





        default: return alert("Parametro no reconocido");
    }
}

// ¿Cómo defines una función ?

/*Yo defino una funcion como un "programa" dentro de otro programa, como una "fabrica"
a la cual yo le ingreso un parametro y me retorna otro un ejemplo de lo que intento decir seria:
una fabrica de agua embontellada, la cual recibe la materia prima "agua" y procede a 
procesarla hasta que sea apta para el consumo humano y posteriormente la retorna embotellada*/

// ¿Hasta cuantos argumentos puedes declarar en una función ?


/*Utilizando función arrow, crear una función que reciba como parámetros
un nombre, apellido y edad y los retorne en un string concatenado
“Hola mi nombre es sebastián yabiku y mi edad 33”*/


const mAdicional01 = () => {
    const nombre = prompt("Ingresa tu nombre:");
    const apellido = prompt("Ingresa tu apellido:");
    const edad = prompt("Ingresa tu edad:");

    const mensaje = `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad} años`;
    return alert(mensaje);
        
    }

const mAdicional02 = () => {

    //Cree una función que tome números y devuelva la suma de sus cubos.
    const cantidadNumeros = prompt("Ingrese la cantidad de números:");
    let sumaCubos = 0;

    
    for (let i = 0; i < cantidadNumeros; i++) {
       
        const numero = prompt(`Ingrese el número #${i + 1}:`);
        const cubo = Math.pow(Number(numero), 3);
        sumaCubos += cubo;
    }

    return  alert ("La suma de cubos es: " + sumaCubos);
}

const mAdicional03 = () => {

    //Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

    let valorIngresado = prompt("Ingrese un valor:");

    let tipoDeValor = typeof valorIngresado;

     return alert(tipoDeValor);

}

/*const mAdicional04 = (...args) => {

   

        
}*/    

function mAdicional05 (array) {

    return console.log(array.filter(valor => typeof valor === 'string'));
}


function mAdicional06 (array) {
    
    if (array.length === 0) {
        return []; 
    }

    const min = Math.min(...array);
    const max = Math.max(...array);

    return console.log([min, max]);
}


const mAdicional07 = () => {



}

const mAdicional08 = () => {

}

const mAdicional09 = () => {

    const palabra = prompt ("Ingresa la palabra") 
    const array = palabra.split('')

    alert(array[0], array[array.length - 1])
}
