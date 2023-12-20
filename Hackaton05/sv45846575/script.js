class Telefonos {
    constructor(Serie, IMEI, marca) {
      this.Serie = Serie;
      this.IMEI = IMEI;
      this.marca = marca;
      this.diagnostico = null;
      this.autorizacionUsuario = false;
      this.abono = 0;
      this.tecnico = null;
      this.repuestos = [];
      this.estado = 'En revisión';
    }

    pasarPrimeraRevision(diagnostico) {
      this.diagnostico = diagnostico;
      this.estado = 'Primera revisión completada';
    }

    obtenerAutorizacionYAbono(autorizacionUsuario, abono) {
      this.autorizacionUsuario = autorizacionUsuario;
      this.abono = abono;
      this.estado = 'Autorización y abono obtenidos';
    }

    asignarTecnico(tecnico) {
      this.tecnico = tecnico;
      this.estado = 'En reparación';
    }

    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }

    mostrarEstado() {
      console.log(`Estado del teléfono ${this.numeroSerie}: ${this.estado}`);
    }
  }

  
  class Tecnicos {
    constructor(nombre, nivel) {
      this.nombre = nombre;
      this.nivel = nivel;
    }
  }

  class Reparaciones {
    constructor(sucursal) {
      this.sucursal = sucursal;
      this.telefonosEnReparacion = [];
    }

    revisarTelefono(phone) {
     
      if (!telefonoReportado(phone.Serie, phone.IMEI)) {
        phone.pasarPrimeraRevision('Revisión inicial completada');
        this.telefonosEnReparacion.push(phone);
      } else {
        console.log('El teléfono no es apto para la reparacion.');
      }
    }

    autorizarReparacion(phone, autorizacionUsuario, abono) {
   
      if (autorizacionUsuario && abono >= 0.5 * phone.diagnostico.precioReparacion) {
        phone.obtenerAutorizacionYAbono(autorizacionUsuario, abono);
      } else {
        console.log('Autorización y abono insuficientes para iniciar la reparación.');
      }
    }

    asignarTecnico(movil, tecnico) {
      // Verificar si el técnico tiene las habilidades necesarias
      if (tecnico.nivel.includes(movil.marca)) {
        movil.asignarTecnico(tecnico);
      } else {
        console.log('Porfavor asigne otro tecnico');
      }
    }

    agregarRepuesto(movil, repuesto) {
      movil.agregarRepuesto(repuesto);
    }

    mostrarEstadoTelefonosEnReparacion() {
      console.log('Estado de los teléfonos en reparación:');
      this.telefonosEnReparacion.forEach(phone => {
        phone.mostrarEstado();
      });
    }
  }