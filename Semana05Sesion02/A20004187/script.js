const Aerolinea = function () { //Esta funcion envia los parametros para ser mostrada en consola
    let Nombre;     //ls variables de param son declaradas de nuevo. No es necesario
    let Ubicacion;
    let arrAviones = [];
    function configurar(){//las variable de param de index, son impresos en consola
        let titulo = document.getElementById("titulo")
        titulo.innerText = `${Nombre} -- ${Ubicacion}`//Esto nombra al titulo de pestaña
        console.log(`Test de la pagina Nombre ->${Nombre}-Ubicacion ->${Ubicacion}`)
        crearAviones();
    }
    function crearAviones(){
        let objAvion1 = new Aviones("QW123","bOIING 737-900",186,93);
        arrAviones.push(objAvion1);
        let objAvion2 = new Aviones("ASD456", "A320-200neo",146,73);
        arrAviones.push(objAvion2);
    }

    function eventos(){
        document.getElementById("reservar").addEventListener("click",reservarVuelo);
    }
    function reservarVuelo(){
        console.log("Voy a empezar a realizar la reserva");
        let origen = prompt("Escriba su ciudad de origen");
        console.log(origen);
        let destino = prompt("Escriba su ciudad de destino");
        console.log(destino);
        let fechaIda = prompt("Escriba la fecha de Ida");
        let fechaVuelta = prompt("Escriba la fecha de vuelta");
        let reserva = new Reservas(origen,destino,fechaIda,fechaVuelta)
        console.log(arrAviones);
        reserva.asignarAvionIda(arrAviones[0]);
    }
    return {
        //Init es como el constructor
        init: function (parametros) {//Esta funcion llama los valores y   
            Nombre = parametros.Nombre;
            Ubicacion=parametros.Ubicacion;
            configurar();//llama a funcion test anteriormente creada
            eventos();
        },
    };
}();//los () parentesis son usados en function(){}();

class Aviones{
    constructor(matricula,modelo,capacidad,nroAsientos,capacidadMinima){
        this.matricula = matricula;
        this.modelo = modelo;
        this.nroAsientos = nroAsientos;
        this.capacidadMinima = capacidadMinima;
        this.habilitado = false;
        this.reservado = 0;
        this.pasajeros = []
    }
    agregar_pasajero(pasajero){
        if(this.reservado >= this.capacidad_minima){
            this.habilitado = true;
        }
        this.pasajeros.push(pasajero);
        this.reservado ++;
    }
} 
class Pasajero{
    constructor(nombrea,apellidos,nro_documento){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.nro_documento = nro_documento;
    }
}
class Reservas{
    constructor(origen,destino,fechaIda,fechaVuelta){
        this.origen = origen;
        this.destino = destino;
        this.fechaIda = fechaIda;
        this.fechaVuelta = fechaVuelta;
        this.avionIda = null;
        this.avionVuelta = null;
    }
    asignarAvionIda(){
        this.avionIda = avion;
    }
    asignarAvionVuelta(avion){
        this.avionVuelta = avion;
    }
}