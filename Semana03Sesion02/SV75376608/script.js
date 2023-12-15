//Armar un modelo plastico
/*function conseguirHerramientas(){
    let respuesta = prompt("Compraste el cortador?");
    if(respuesta == "SI"){
         respuesta = prompt("Compraste el cianocrilato?");
        if(respuesta == "SI"){
             respuesta = prompt("Compraste lijas?");
             if(respuesta == "SI"){
                return true
            }
        }
    }else{
        return false 
    }

      
   
}

function armarAlas(){
    let respuesta =parseInt( prompt("Oye, cuantas piesas debes cortar ?"))
    switch(true){
        case (respuesta < 6):
            console.log("Facil , lo haces en 10 minutos")
            break;
        case (respuesta < 16):
            console.log("Genial , lo haces en 30 minutos")
            break;
        default:
            console.log("Lo siento , vas a demorarte mucho");
            break
    }

    console.log("Cortar las piezas escritas en el manual")
    console.log("Pintar cada pieza")
    console.log("Dejar secar la pintura")
    console.log("Pegar cada pieza segun lo indicado en el manual")
}

//conseguirHerramientas();


if(conseguirHerramientas()){
    armarAlas();
} else{
console.log("Debes conseguir las herramientas para continuar")}


for (let i = 0; i < 5; i++) {
   console.log("El numero es " + i)
}

const person =  {
    nombre : "Jhon",
    apellido : "Sanches",
    edad : 18 
}

for( let x  in person){
    console.log(person[x]);
}


const cars = ["BMW","Porshe","Volvo","Mercedes"]

for(let x of cars){
    console.log(x)
}


let i = 0
while (i < 10) {
    console.log(i)
    i++
}

let bandera = true;
while (bandera) {

    let respuesta = prompt("Oye , que numero tengo en mente");
    if(respuesta == "9"){
        alert("Adivinaste mi numero")
        bandera = false
    }   
}


while (true) {
    
    let respuesta = prompt("Oye , que numero tengo en mente");
    if(respuesta == "9"){
        alert("Adivinaste mi numero")
        break;
    }   
}
*/



let respuesta = prompt("Deseas ingresar al concierto?")



if (respuesta == "Si") {
    let bucle = true
    let entradas = [];
    while (bucle) {

        let clave = prompt("Coloca la clave de tu entrada");

        if (entradas.length == 0) {
            alert("Eres el primero , pasa")
            entradas.push(clave);
            console.log(entradas);
            console.log(entradas.length)
        }

        else {
            if (entradas.includes(clave)) {
                alert("Error : la entrada no existe o ya fue validada")
                console.log(entradas);
                break;

            } else {
                alert("Entrada validada correctamente , puedes pasar , disfruta")
                entradas.push(clave);

                respuesta = prompt("Deseas validar otra entrada?")

                if(respuesta == "No"){
                    bucle = false 
                    break;
                }
                 
            }
        }


    }
}


