const Aeroline = function(){

let nombre;
let Ubicacion;
function configurar(){
    let titulo = document.getElementById("titulo");
    titulo.innerText = `${nombre} -- ${Ubicacion}`
    
    console.log(`test de la pagina nombre ${nombre} y ubicacion ${Ubicacion}` );
    crearAviones();
    }

function crearAviones(){
    let objAvion1 = new Aviones ("qww","BOING 737-900",168,76);
    Aviones.push(objAvion1);

    let objAvion2 = new Aviones ("qww","BOING 737-900",168,76);
    Aviones.push(objAvion2);

}



return{

    init: function(parametros){
        nombre = parametros.nombre;
        Ubicacion=parametros.Ubicacion;
        configurar();
    },

};

}();

class Aviones{

    constructor(matricula,modelo,nroasientos,capacidadMinima){
        this.matricula=matricula;
        this.modelo=modelo;
        this.nroasientos=nroasientos;
        this.capacidadMinima=capacidadMinima;
        this.habilidado = false;
        this.pasajeros.push(pasajero);
        this.reservado  ++;
        


    }
}

class Pasajeros{

    constructor(nombre, apellido, nro_documentos){
        this.nombre=nombre;
        this.apellido=apellido;
        this.nro_documentos=nro_documentos;
   
    }
}

class Reservas{
    constructor(origen,destino,fechaIda,fechaVuelta){
        this.origen=origen;
        this.destino=destino;
        this.fechaIda=fechaIda;
        this.fechaVuelta=fechaVuelta;
        this.avion_Ida= null;
        this.avion_Vuelta= null;
}

    asignarAvionIda(avion){
    this.avion_Ida = avion;
    }

    asignarAvionVuelta(avion){
     this.avion_Vuelta = avion;


}

}