//Venta de SmartTv
let smartv = {
    tamaño: 55,
    marca: "LG",
    SO: "WebOS",
    resolucion: "4K",
    modelo: "55LJ5500",
    tipoPantalla: "LED",
    panel: "IPS",

    reproduccionVideo() {
        console.log("Reproduccion VIDEO")
    },
    reproduccionAudio() {
        console.log("Reproduccion AUDIO")
    },
    navegacionInternet() {
        console.log("Navegando INTERNET")
    }
}

console.log(smartv)


let mensaje = () => {
    console.log("Hola desde funcion flecha")
}

const numbers = [11, 22, 3, 48, 5]

let maxValue = Math.max(...numbers)
console.log(maxValue)


const myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

const numbers1 = [11, 22, 100, 48, 5]

let maxValue1 = Math.max(...numbers1)
console.log(maxValue1)


async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();