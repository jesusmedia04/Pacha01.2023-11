const Aerolinea = function (){
    let Nombre;
    let Ubicacion;
    let arrAviones = [];
    function configurar (){
        let titulo = document.getElementById("titulo");
        titulo.innerText = `${Nombre} -- ${Ubicacion}`
        console.log(`Test de la pagina Nombre va ser ${Nombre} y la ubicacion será en ${Ubicacion}`)
        crearAviones();
    }

    function crearAviones (){
         let objAvion1 = new Aviones("QWE123","Boing 737-900",186,93)
         arrAviones.push(objAvion1)
         let objAvion2 = new Aviones("ASD456","A320-200neo",146,73)
         arrAviones.push(objAvion2)
    }


    function eventos(){
        document.getElementById("reservar").addEventListener('click', reservarVuelo);
        
    }


    function reservarVuelo(){
        console.log("Voy a empezar a realizar la reserva")
        let origen  = prompt("Escriba su ciudad de origen")
        console.log(origen)
        let destino  = prompt("Escriba su ciudad de destino")
        console.log(destino)
        let fechaIda  = prompt("Escriba la fecha de ida")
        console.log(fechaIda)
        let fechaVuelta  = prompt("Escriba la fecha de vuelta")
        console.log(fechaVuelta)
        let reserva = new Reservas(origen,destino,fechaIda,fechaVuelta);
        console.log(arrAviones)

        reserva.asignarAvionIda(arrAviones[0])
        reserva.asignarAvionVuelta(arrAviones[1])
        let pasajero = asignarPasajero();
        reserva.avionIda.agregar(pasajero)
        reserva.avionVuelta.agregar(pasajero)

        console.log(reserva)
        dibujarReserva(reserva);
    }

    function dibujarReserva(reserva){
        let origen = document.getElementById("origen")
        origen.innerText = reserva.origen; 
        let destino = document.getElementById("destino")
        destino.innerText = reserva.destino; 
        let fechaIda = document.getElementById("fechaIda")
        fechaIda.innerText = reserva.fechaIda; 
        let fechaVuelta = document.getElementById("fechaVuelta")
        fechaVuelta.innerText = reserva.fechaVuelta; 
        let nombres = document.getElementById("nombres")
        nombres.innerText = reserva.avionIda.pasajeros[0].nombre;
        let apellidos = document.getElementById("apellidos")
        apellidos.innerText = reserva.avionIda.pasajeros[0].apellido;
        let nroDocumento = document.getElementById("nroDocumento")
        nroDocumento.innerText =reserva.avionIda.pasajeros[0].nro_documento;
    }


    function asignarPasajero(){
        let nombres = prompt("Ingrese los nombres del pasajero")
        let apellidos = prompt("Ingrese los apellidos del pasajero")
        let nro_documento = prompt("Ingrese el Nro de documento del pasajero")

        objPasajero = new Pasajeros(nombres,apellidos,nro_documento)

        return objPasajero;
    }

    return {
        
        init: function(parametros){
            Nombre = parametros.Nombre;
            Ubicacion = parametros.Ubicacion;
            configurar();   
            eventos();
        }
    }
}();

class Aviones {
    constructor (matricula ,modelo,nroAsientos,capacidadMinima ){
        this.matricula  = matricula ,
        this.modelo = modelo,
        this.nroAsientos = nroAsientos,
        this.capacidadMinima = capacidadMinima,
        this.habilitado = false,
        this.reservado = 0,
        this.pasajeros = []
    }  

    agregar (pasajero) {
        if(this.reservado  >= this.capacidadMinima){
            this.habilitado = true
        }
        this.pasajeros.push(pasajero)
        this.reservado++
    }
}


class Pasajeros {
    constructor(nombre,apellido , nro_documento){
        this.nombre = nombre,
        this.apellido = apellido,
        this.nro_documento = nro_documento
    }
}


class Reservas {
    constructor(origen ,destino, fechaIda , fechaVuelta){
        this.origen = origen,
        this.destino = destino,
        this.fechaIda = fechaIda,
        this.fechaVuelta = fechaVuelta,
        this.avionIda  = null,
        this.avionVuelta = null 
    }


    asignarAvionIda(avion){
        this.avionIda = avion
    }

    asignarAvionVuelta(avion){
        this.avionVuelta = avion
    }
}