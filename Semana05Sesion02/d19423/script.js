const Aerolinea = function () {
    let Nombre;
    let Ubicacion;
    let arrAviones = [];
    function configurar(){
        let titulo = document.getElementById("titulo");
        titulo.innerText = `${Nombre} -- ${Ubicacion}`
        console.log(`Test de la pagina Nombre -> ${Nombre} - Ubicacion -> ${Ubicacion}`);
        crearAviones();
    }

    function crearAviones(){
        let objAvion1 = new Aviones("QWE123","Boing 737-900",186,93);
        arrAviones.push(objAvion1);
        let objAvion2 = new Aviones("ASD456", "A320-200neo",146, 73);
        arrAviones.push(objAvion2);
        
    }

    function eventos(){
        document.getElementById("reservar").addEventListener("click",reservarVuelo);
    }
    function reservarVuelo(){
        console.log("Voy a empezar a realizar la reserva");
        let origen = prompt("Escriba su cuidad de origen");
        console.log(origen);
        let destino = prompt("Escriba su ciudad de destino");
        console.log(destino);
        let fechaIda = prompt("Escriba la fecha de Ida");
        let fechaVuelta = prompt("Escriba la fecha de vuelta");
        let reserva = new Reservas(origen,destino,fechaIda,fechaVuelta);
        console.log(arrAviones);
        reserva.asignarAvionIda(arrAviones[0]);
        reserva.asignarAvionVuelta(arrAviones[1]);
        console.log(reserva);
    }
    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion=parametros.Ubicacion;
            configurar();
            eventos();
        },
    };
}();

class Aviones{
    constructor(matricula,modelo,nroAsientos,capacidadMinima){
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
class Pasajeros{
    constructor(nombres, apellidos, nro_documento){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.nro_documento = nro_documento
    }
}

class Reservas{
    constructor(origen, destino,fechaIda, fechaVuelta){
        this.origen = origen;
        this.destino = destino;
        this.fechaIda = fechaIda;
        this.fechaVuelta = fechaVuelta;
        this.avionIda = null;
        this.avionVuelta = null;
    }
    asignarAvionIda(avion){
        this.avionIda = avion;
    }
    asignarAvionVuelta(avion){
        this.avionVuelta = avion;
    }
}