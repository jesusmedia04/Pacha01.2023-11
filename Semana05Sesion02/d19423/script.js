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
        let pasajero = asignarPasajero();
        reserva.avionIda.agregar_pasajero(pasajero);
        reserva.avionVuelta.agregar_pasajero(pasajero);
        console.log(reserva);

        let Pasajero = asignarPasajero(); 
        reserva.avionIda.agregar_pasajero(Pasajero);
        reserva.avionVuelta.agregar_pasajero(Pasajero);
        console.log(reserva);



    }



    
    function asignarPasajero(){
        let nombres = prompt("Ingrese el nombre del pasajero");
        let apellidos = prompt("Ingrese los apellido del pasajero");
        let nrodocumento = prompt("Ingrese el numero de documento del pasajero");
        let objpasajeroS = new Pasajeros(nombres, apellidos, nrodocumento);
        return objpasajeroS;

    }





        dibujarReserva(reserva);
    }

    function dibujarReserva(reserva) {
        let origen = document.getElementById("origen");
        origen.innerText = reserva.origen;
        let destino = document.getElementById("destino");
        destino.innerText = reserva.destino;
        let fechas = document.getElementById("fechas");
        fechas.innerText = `Vuelo reservado desde el ${reserva.fechaIda} hasta el ${reserva.fechaVuelta}`;
        let nombresOrigen = document.getElementById("nombresOrigen");
        nombresOrigen.innerText = `${reserva.avionIda.pasajeros[0].nombres} ${reserva.avionIda.pasajeros[0].apellidos}`;
        let nombresDestino = document.getElementById("nombresDestino");
        nombresDestino.innerText = `${reserva.avionVuelta.pasajeros[0].nombres} ${reserva.avionVuelta.pasajeros[0].apellidos}`;
        //vueloIda
        let vueloIda = document.getElementById("vueloIda");
        vueloIda.innerText = `${reserva.avionIda.modelo} --- ${reserva.avionIda.matricula}`;
        let vueloRetorno = document.getElementById("vueloRetorno");
        vueloRetorno.innerText = `${reserva.avionVuelta.modelo} --- ${reserva.avionVuelta.matricula}`;
        let divReserva = document.getElementById("divReserva");
        divReserva.style.display="block";
    }

    function asignarPasajero(){
        let nombres = prompt("Ingrese los nombres del pasajero");
        let apellidos = prompt("Ingrese los apellidos del pasajero");
        let numeroDocumento = prompt("Ingrese su numero de documento");
        let objpasajero =  new Pasajeros(nombres,apellidos,numeroDocumento);
        return objpasajero;

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
    constructor(nombres, apellidos, nrodocumento){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.nrodocumento = nrodocumento
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

