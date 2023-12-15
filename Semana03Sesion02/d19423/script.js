


<<<<<<< HEAD
/// Armar un modelo plastico
function conseguirHerramientas(){
    let respuesta = prompt("Compraste el cortador?").toUpperCase();
    if(respuesta === "SI"){
        respuesta = prompt("Compraste el cianocrilato??").toUpperCase();
        if (respuesta === "SI") {
            respuesta = prompt("Conseguiste las lijas???").toUpperCase();
            if(respuesta === "SI"){
                return true;
            }
        }
=======
/// Armar un modelo plastico 
function conseguirHerramientas ( ){
    let respuesta = prompt("Compraste el cortador?").toUpperCase();
    if(respuesta === "SI"){
        respuesta = prompt("Compraste el cianocrilato??")
        if (resuesta === "SI") {
            respuesta = prompt("Conseguiste las lijas??")
            if(respuesta === "SI"){
                return true; 
            }
        } 
>>>>>>> e1cacab6b06cf55e31daf666969904f7a8cacaa8
    }
    return false;
}

<<<<<<< HEAD
function armarAlas(){
    let respuesta = parseInt( prompt("Oye cuantas piezas debes cortar???"))
=======
function armarAla(){
    let respuesta = parseInt ( prompt("Oye cuantas piezas debes cortar???"))
>>>>>>> e1cacab6b06cf55e31daf666969904f7a8cacaa8
    switch (true) {
        case (respuesta < 6):
            console.log("Facil lo haces en 10 minutos")
            break;
        case (respuesta < 16):
            console.log("Genial te vas a demorar 30 minutos")
            break;
        default:
            console.log("lo siento amigo vas a demorarte mucho")
            break;
    }
<<<<<<< HEAD
    console.log("Cortar las piezas descritas en el manual")
=======
    console.log("Cortar las piezas descrits en el manual")
>>>>>>> e1cacab6b06cf55e31daf666969904f7a8cacaa8
    console.log("Pintar cada pieza")
    console.log("dejar secar la pintura")
    console.log("pegar cada pieza segun lo indicado en el manual")
}

<<<<<<< HEAD

//conseguirHerramientas();
//armarAlas();

if (conseguirHerramientas()) {
    armarAlas();
    
=======
//conseguirHerramientas();
//armarAlas();


if (conseguirHerramientas()) {
    armarAlas();

>>>>>>> e1cacab6b06cf55e31daf666969904f7a8cacaa8
} else {
    console.log("Debe conseguir las herramientas indicadas");
}

let day;
switch (new Date().getDay()) {
    case 0:
<<<<<<< HEAD
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

console.log(day);

for (let i = 0; i < 100; i++) {
    console.log( "The number is " + i );
}

const person = {
    fname:"John", 
    lname:"Doe", 
=======
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break; 
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day)

for (let i = 0; 1 < 5; i++) {
    console.log( "The number is " + i);
 }

const person = {
    fname:"John",
    lname:"Doe",
>>>>>>> e1cacab6b06cf55e31daf666969904f7a8cacaa8
    age:25
};


for (let x in person) {
<<<<<<< HEAD
  console.log(person[x]);
}

const cars = ["BMW", "Volvo", "Mini", "Mercedes",false, 33, 3.14];

let text = "";
for (let x of cars) {
  console.log( x);
}

let i = 0
while (i < 10) {
    console.log("The number is " + i);
    i++;
  }
=======
    console.log(person[x]);
}

const cars = ["BWM", "Volvo", "Mini", "Mercedes", false, 33, 3.14];

let text = "";
for (let x of cars) {
    console.log( x);
}

let i = 0 
while (i < 10) {
    console.log("The number is" + i)
    i++;
}
>>>>>>> e1cacab6b06cf55e31daf666969904f7a8cacaa8


let bandera = true;
while (bandera) {
    let respuesta = prompt("oye que numero tengo en mente")
<<<<<<< HEAD
    if(respuesta === "9"){
=======
    if(respuesta === "9") {
>>>>>>> e1cacab6b06cf55e31daf666969904f7a8cacaa8
        alert("Adivinaste, tu sabes leer la mente");
        bandera = false;
    }
}

while(true){
    let respuesta = prompt("oye que numero tengo en mente")
    if(respuesta === "9"){
        alert("Adivinaste, tu sabes leer la mente");
        break;
    }
}