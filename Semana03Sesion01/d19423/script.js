var nombre = "Roberto"

console.log(nombre)

nombre = "Karen"

console.log(nombre)

var primerNombre = "David"; console.log(primerNombre); //Esta es la nomenclatura elegida 

var nombre = "Juan"; 

let numeroDni = '000000000';

{
    let numeroDni = '111111111'
}

const PI = 3.1416;

console.error(PI);

//PI = 3.1416; 

console.info(PI);
/*
var PrimerApellido = "Lopez"
var segundo_apellido = "Pineda"
*/

//Operadores Aritmeticos 
let x = 5;
let y = 2;
let z = x * y;
console.log(z);

let er = 10;
er += 5;

console.log(er);

//Operadores de comparacion

let comp = 13 > 15; 
console.log(comp)

let tvSala ="55";
let tvDormitorio = 55;

let iguales = tvSala == tvDormitorio;
console.log(iguales);

iguales = tvSala === tvDormitorio; 
console.log(iguales); 

//TIPOS de DATOS 
//Caracteres STRINGS
let caracteres = "Palabra";
let caracteres2 = 'Palabra 2';
let caracteres3 = `Palabra
3
es la mejor
opcion para escribir`;

console.log(caracteres3);

let caracteres4 = `Hola mi nombre es ${nombre}`;
console.log(caracteres4);

let caracteres5 = "Hola mi nombre es " + nombre;
console.log(caracteres5);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let length = text.length;
console.log(length)

text = "We are the so-called \"Vikings\" from the north.";
console.log(text)

text = "Apple, Banana, Kiwi"; 
let part = text.slice(7,13);
console.log(text)
console.log(part)

let fecha = "1983-08-28";
let anio = fecha.substring(0,4);
let mes = fecha.substring(5,7);
let dia = fecha.substring(8,10) 
console.log(anio);
console.log(mes);
console.log(dia);

text = "Please visit Microsoft!"; 
let newText = text.replace("Microsoft", "W3Shools");
console.log(newText);

let text1 = "Hello Word:";
let text2 = text1.toUpperCase();
console.log(text2);
text2 = text1.toLowerCase();
console.log(text2);

text1 = "       Hello World!       ";
text2 = text1.trim();
console.log(text2);


text = "5";
let padded = text.padStart(4,"0");
console.log(padded);

let xd = 100 / "Apple";
console.log(isNaN(xd));


const d = new Date("2022-03-23")
console.log(d);

let numeroPI = Math.PI;
console.log(numeroPI);

let age = 23
let voteable = (age > 18) ? "Si eres mayor de edad":"aun te falta crecer";
console.log(voteable)