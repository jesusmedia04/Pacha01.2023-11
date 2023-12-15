
//venta de Smart TV

let smartTV = {
tamaño: 55,
marca: "LG",
SO: "webOS",
Resolucion: "4k",
modelo: "55LJ5500",
tipoPantalla: "LED",
panel: "IPS",

reproducionVideo(){
console.log("Reproduciendo Video")
},
reproducionAudio(){
    console.log("Reproduciendo Audio") 
 },
NavegacionInternet(url){
console.log("Navegando por Internet: " +url)
   },

}

console.log(smartTV.marca)
console.log(smartTV.NavegacionInternet("https://www.w3schools.com/js/js_es5.asp"))

let mensaje= ()=> console.log("Hola");
function mensaje2(){
    console.log("Hola");
}
mensaje();
mensaje2();

let preparaCafe=()=>console.log("Preparando cafe");

function preparaCafe2(azucar,leche){

    console.log(`Preparando cafe con  ${azucar} cucharadas de azucar`);

}

let objvendedor={
 nombre:"Leslie",
 apellido:"Tapara",
 tipodeDocumento:"Carnet de extranjeria",
 numeroDocumnento:"78958864",
 id:1,
 turno:"noche",
 promedioVentas: 0,
 vender(producto){

    console.log("vendiendo el producto"+producto.modelo)
 }

}

 let objvendedor02={
    nombre:"Nicole",
    apellido:"Tapara",
    tipodeDocumento:"Carnet de extranjeria",
    numeroDocumnento:"78958864",
    id:2,
    turno:"noche",
    promedioVentas: 0,
    vender(producto){
   
       console.log("vendiendo el producto"+producto.modelo)
    }
 }

let objvendedor03={
        nombre:"Valentina",
        apellido:"Tapara",
        tipodeDocumento:"Carnet de extranjeria",
        numeroDocumnento:"78958864",
        id:3,
        turno:"noche",
        promedioVentas: 0,

        vender(producto){
       
           console.log("vendiendo el producto"+producto.modelo)
        }

}

let arrvendedores=[]

arrvendedores.push(objvendedor,objvendedor02,objvendedor03)
console.log(arrvendedores);
console.log();

