class Phone {
    constructor(numeroSerie, IMEI, marca) {
      this.numeroSerie = numeroSerie;
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
  
  // Definir la clase Technician para representar a un técnico
  class Technician {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  }
  
  // Definir la clase RepairShop para representar un local de reparaciones
  class RepairShop {
    constructor(sucursal) {
      this.sucursal = sucursal;
      this.telefonosEnReparacion = [];
    }
  
    revisarTelefono(phone) {
      // Verificar si el teléfono no está reportado
      // (Implementar lógica para verificar el número de serie y el IMEI)
      if (!telefonoReportado(phone.numeroSerie, phone.IMEI)) {
        phone.pasarPrimeraRevision('Revisión inicial completa');
        this.telefonosEnReparacion.push(phone);
      } else {
        console.log('El teléfono está reportado y no puede ser reparado.');
      }
    }
  
    autorizarReparacion(phone, autorizacionUsuario, abono) {
      // Verificar autorización y abono
      if (autorizacionUsuario && abono >= 0.5 * phone.diagnostico.precioReparacion) {
        phone.obtenerAutorizacionYAbono(autorizacionUsuario, abono);
      } else {
        console.log('Autorización y abono insuficientes para iniciar la reparación.');
      }
    }
  
    asignarTecnico(phone, tecnico) {
      // Verificar si el técnico tiene las habilidades necesarias
      if (tecnico.skills.includes(phone.marca)) {
        phone.asignarTecnico(tecnico);
      } else {
        console.log('El técnico no tiene las habilidades necesarias para reparar este teléfono.');
      }
    }
  
    agregarRepuesto(phone, repuesto) {
      phone.agregarRepuesto(repuesto);
    }
  
    mostrarEstadoTelefonosEnReparacion() {
      console.log('\nEstado de los teléfonos en reparación:');
      this.telefonosEnReparacion.forEach(phone => {
        phone.mostrarEstado();
      });
    }
  }