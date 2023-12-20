var str = "HELLO WORLD";
console.log(str.charAt(6));            // returns H
console.log(str[6]);            // returns H

"Hello \
Dolly!";

`Estos caracteres
si me 
Permiten hacer 
multilinea`;

var str = "       Hello World!        ";
console.log(str.trim());

// function myFunction() {
//     var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     var x = document.getElementById("demo");
//     x.innerHTML = Array.isArray(fruits);
//   }

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
  
function myFunction(value) {
    txt = txt + value + "<br>";
    console.log(value);
  }

  var numbers1 = [45, 4, 9, 16, 25];
  var numbers2 = numbers1.map(myFunction);
  console.log(numbers1)
  console.log(numbers2)

  function myFunction(value) {
    return value * 2;
  }
var numbers3 =[]

for (let index = 0; index < numbers1.length; index++) {
    const element = numbers1[index];
    numbers3.push(element*2)
}
console.log(numbers3)

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a)


var timInMSs = Date.now();
console.log(timInMSs)






let mensaje = ()=> console.log("Hola");
function mensaje2(){
    console.log("Hola");
}

mensaje();
mensaje2();

let preparaCafe=(azucar)=>console.log(`Preparando cafe con ${azucar} cucharadas de azucar`);

function preparaCafe2(azucar, leche, chocolate = true){
    var str = leche ? " y con leche":"sin leche" 
    var str2 = chocolate ? "y con chocolate": "sin chocolate"
    console.log(`Preparando cafe con ${azucar} cucharadas de azucar ${str} ${str2}`);
}

preparaCafe(3)
preparaCafe(0)
preparaCafe2(4)
preparaCafe2(16)
preparaCafe2(4,true, false)

const numbers4 = [23,55,21,87,56,110];
let maxValue = Math.max(...numbers4);
console.log(maxValue)


const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Esta listo tu cafe"); }, 5000);
  });

  myPromise.then(function(value) {
    console.log(value);
  });


  const numbers5 = [23,55,21,87,56,200];
let maxValue1 = Math.max(...numbers5);
console.log(maxValue1)

async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    console.log( await myPromise);
  }
  
  myDisplay();

//venta de smartTV

let smartTV01 = {
    tamaño : 55,
    marca: "LG",
    SO: "WebOS",
    resolucion : "4K",
    modelo: "55LJ5500",
    tipoPantalla: "LED",
    panel:"IPS",
    numeroSerie: 122,

    reproducionVideo(){
        console.log("Reproduciendo Video")
    },
    reproduccionAudio(){
        console.log("Reproduciendo Audio")
    },
    navegacionInternet(url){
        console.log("Navegando por Internet en la pagina: "+url)
    }
}
let smartTV02 = {
    tamaño : 55,
    marca: "LG",
    SO: "WebOS",
    resolucion : "4K",
    modelo: "55LJ5500",
    tipoPantalla: "LED",
    panel:"IPS",
    numeroSerie: 123,

    reproducionVideo(){
        console.log("Reproduciendo Video")
    },
    reproduccionAudio(){
        console.log("Reproduciendo Audio")
    },
    navegacionInternet(url){
        console.log("Navegando por Internet en la pagina: "+url)
    }
}
let smartTV03 = {
    tamaño : 55,
    marca: "LG",
    SO: "WebOS",
    resolucion : "4K",
    modelo: "55LJ5500",
    tipoPantalla: "LED",
    panel:"IPS",
    numeroSerie: 124,

    reproducionVideo(){
        console.log("Reproduciendo Video")
    },
    reproduccionAudio(){
        console.log("Reproduciendo Audio")
    },
    navegacionInternet(url){
        console.log("Navegando por Internet en la pagina: "+url)
    }
}
let smartTV04 = {
    tamaño : 55,
    marca: "LG",
    SO: "WebOS",
    resolucion : "4K",
    modelo: "55LJ5500",
    tipoPantalla: "LED",
    panel:"IPS",
    numeroSerie: 125,

    reproducionVideo(){
        console.log("Reproduciendo Video")
    },
    reproduccionAudio(){
        console.log("Reproduciendo Audio")
    },
    navegacionInternet(url){
        console.log("Navegando por Internet en la pagina: "+url)
    }
}

let arrProductos = [smartTV01,smartTV02,smartTV03,smartTV04]
console.log(arrProductos)



let objVendedor01={
    nombre:"Roberto",
    apellido: "Pineda",
    tipoDocumento: "Carnet de Extrangeria",
    numeroDocumento: "001575291",
    id: 1,
    turno: "Noche",
    promedioVentas: 0,
    vender(producto){
        console.log("Vendiendo el producto "+ producto.modelo + "con el numero de serie :"+producto.numeroSerie)
    }
}

let objVendedor02={
    nombre:"David",
    apellido: "Lopez",
    tipoDocumento: "Pasaporte",
    numeroDocumento: "17099874",
    id: 2,
    turno: "Dia",
    promedioVentas: 0,
    vender(producto){
        console.log("Vendiendo el producto "+ producto.modelo + "con el numero de serie :"+producto.numeroSerie)
    }
}

let objVendedor03={
    nombre:"Karen",
    apellido: "Lam",
    tipoDocumento: "DNI",
    numeroDocumento: "45823834",
    id: 3,
    turno: "Tarde",
    promedioVentas: 0,
    vender(producto){
        console.log("Vendiendo el producto "+ producto.modelo + "con el numero de serie :"+producto.numeroSerie)
    }
}

let arrVendedores= [];
arrVendedores.push(objVendedor01,objVendedor02,objVendedor03)
console.log(arrVendedores);

let objComprador01={
    nombre:"Juanita",
    apellido: "Perez",
    tipoDocumento: "DNI",
    numeroDocumento: "45454545",
    comprar(producto){
        console.log("Comprando el producto "+ producto.modelo + "con el numero de serie :"+producto.numeroSerie)
    }
}
let objComprador02={
    nombre:"Pepita",
    apellido: "Algo",
    tipoDocumento: "DNI",
    numeroDocumento: "54545454",
    comprar(producto){
        console.log("Comprando el producto "+ producto.modelo + "con el numero de serie :"+producto.numeroSerie)
    }
}

let arrCompradores = [objComprador01,objComprador02]
console.log(arrCompradores)


function procesoVenta(){
    let vendedor  = getRandomObject(arrVendedores);
    let producto = getRandomObject(arrProductos);
    vendedor.vender(producto);
    objComprador01.comprar(producto);
    
}

function getRandomObject(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

procesoVenta()