/// Armar un modelo plastico


function conseguirHerramientas(){
   /// console.log("Comprar Cortador");
    let respuesta=prompt("comprastes el cortado??").toUpperCase();
    if(respuesta==="SI"){
        respuesta=prompt("comprastes cianocrilato?").toUpperCase();
        if(respuesta==="SI"){
            respuesta=prompt("conseguistes lijas?").toUpperCase();
            if(respuesta==="SI"){

                return true;
            }
        }
    }
    return false;


    console.log("Comprar cianocrilato ");
    console.log("Conseguir Lijas ");
    return true;


}


function armarAlas(){
    let respuesta=parseInt(prompt("Oye cuantas piezas debes cortar??"))
    switch(true){
        case (respuesta < 6):
        console.log("Facil lo haces en 10 minutos ")
        break;
        case (respuesta < 16):
        console.log("Facil lo haces en 30 minutos ")
        break;
        default:
            console.log("Lo siento amigo vas a demorar muchisimo")
            break;

      }


    }


    console.log("Cortar las piezas escrits en el manual");
    console.log("Pintar cada pieza");
    console.log("Dejar secar la pintura");
    console.log("Pegar cada pieza segun lo indicado en el manual ");



//conseguirHerramientas();
///armarAlas();
if(conseguirHerramientas){
armarAlas();

}else{
    console.log("Debes conseguir las herramientas indicadas");
}

let bandera =true;
while(bandera){
    let respuesta = prompt("Oye que numero tengo en mente")
    if(respuesta=== "9"){
        alert("Adivinaste, tu sabes leer la mente");
        bandera= false;
    }
}

