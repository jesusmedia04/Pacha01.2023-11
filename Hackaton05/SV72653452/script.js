class Telefono 
{
    constructor(numeroSerie, imei, marca) 
    {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
    }
}

class Tecnico 
{

    constructor(nombre, skills)
     {
        this.nombre = nombre;
        this.skills = skills;
    }
}

class FalloHardware
 {
    constructor(bateria, pantalla,botoneslaterales,camara, ram) 
    {
        this.bateria = bateria;
        this.pantalla = pantalla;
        this.botoneslaterales = botoneslaterales;
        this.camara = camara;

        this.ram = ram;
    }
}


class NuevosFallosHardware
 {
    constructor(altavoz,microfono,puertodecarga,puertosim,puertoaux) 
    {
        this.altavoz = altavoz;
        this.microfono = microfono;
        this.puertodecarga = puertodecarga;
        this.puertosim = puertosim;

        this.puertoaux = puertoaux;
    }
}


document.addEventListener("DOMContentLoaded", () => 
{
    const iniciarReparacionButton = document.getElementById("iniciarReparacion");
    const reiniciarSistemaButton = document.getElementById("reiniciarSistema");

    iniciarReparacionButton.addEventListener("click", iniciarReparacion);
    reiniciarSistemaButton.addEventListener("click", reiniciarSistema);

    const telefonos = 
    [
        new Telefono("123456", "987654321", "Android"),
        new Telefono("789012", "123456789", "iOS"),
        new Telefono("345678", "567890123", "Android"),
        new Telefono("901234", "234567890", "iOS"),
        new Telefono("567890", "345678901", "Android")
    ];

    function getRandomBoolean()
     {
        return Math.random() < 0.5;
    }

    function desactivarBoton(boton)
     {
        boton.disabled = true;
    }
    
    function iniciarReparacion() 
    {
        const telefonoSeleccionado = telefonos[Math.floor(Math.random() * telefonos.length)];

        const infoContainer = document.getElementById("infoReparacion");
        infoContainer.innerHTML = `<p>Número de Serie: ${telefonoSeleccionado.numeroSerie}</p>
                                    <p>IMEI: ${telefonoSeleccionado.imei}</p>
                                    <p>Marca: ${telefonoSeleccionado.marca}</p>`;

        // Decisión aleatoria de si el celular está reportado
        const estaReportadoAleatorio = getRandomBoolean();
        const reportado = estaReportadoAleatorio ? "Sí" : "No";

        const infoReportado = document.createElement("p");
        infoReportado.textContent = `Reportado: ${reportado}`;
        infoContainer.appendChild(infoReportado);

        if (!estaReportadoAleatorio) 
        {
            // Primer diagnóstico
            const AnalisisdeFallaAndroid =
             [
                new FalloHardware("BATERIA = Buen estado", "PANTALLA = En revisión","BOTONES LATERALES = En revisión","CAMARA = Buen estado", 4),
                new FalloHardware("BATERIA = En revisión", "PANTALLA = Buen estado","BOTONES LATERALES = Buen estado","CAMARA = En revisión", 16),
            ];

            const AnalisisdeFallaIOS =
             [
                new FalloHardware("BATERIA = Buen estado", "PANTALLA = En revisión","BOTONES LATERALES = Buen estado","CAMARA = En revisión", 8),
                new FalloHardware("BATERIA = En revisión", "PANTALLA = Buen estado","BOTONES LATERALES = En revisión","CAMARA = Buen estado", 12),
            ];

           

            

            

            const falloHardwareSeleccionado = telefonoSeleccionado.marca.toLowerCase() === "android" ?
                AnalisisdeFallaAndroid[Math.floor(Math.random() * AnalisisdeFallaAndroid.length)] :
                AnalisisdeFallaIOS[Math.floor(Math.random() * AnalisisdeFallaIOS.length)];

            const mensajeFalloHardware = document.createElement("p");
            mensajeFalloHardware.textContent = `DIAGNOSTICO 1: ${falloHardwareSeleccionado.bateria}, ${falloHardwareSeleccionado.pantalla}, ${falloHardwareSeleccionado.botoneslaterales},${falloHardwareSeleccionado.camara},Numero de ram: ${falloHardwareSeleccionado.ram}`;
            infoContainer.appendChild(mensajeFalloHardware);

           
            // Preguntar si desea proceder con la reparación
            const preguntaProceder = document.createElement("p");
            preguntaProceder.textContent = "¿Desea proceder con la reparación?";
            infoContainer.appendChild(preguntaProceder);

            const botonProceder = document.createElement("button");
            botonProceder.textContent = "Sí";
            botonProceder.addEventListener("click", () => 
            {
                desactivarBoton(botonProceder);
                desactivarBoton(botonNoProceder);

                // Si elige proceder, solicitar abono
                let abono;

                while(true)
                {
                 abono = parseFloat(prompt("Total aproximado 300$. Ingrese el abono del 50% de la reparación :"));

                 if (!isNaN(abono) && abono == 150) 
                    {
                     const tecnicosAndroid =
                      [
                        new Tecnico("Técnico Carlos (especialista en android)", ["Android"]),
                        new Tecnico("Técnico Javier (especialista en android)", ["Android"]),
                        new Tecnico("Técnico Alex (especialista en android)", ["Android"])
                       ];

                     const tecnicosIOS =
                     [
                        new Tecnico("Técnico Marco (especialista en ios)", ["iOS"]),
                        new Tecnico("Técnico Joaquin (especialista en ios)", ["iOS"]),
                        new Tecnico("Técnico Dylan (especialista en ios)", ["iOS"])
                     ];

                     const tecnicosDisponibles = telefonoSeleccionado.marca.toLowerCase() === "android" ? tecnicosAndroid : tecnicosIOS;
                     const tecnicoSeleccionado = tecnicosDisponibles[Math.floor(Math.random() * tecnicosDisponibles.length)];

                     const estadoReparacion = document.createElement("p");
                     estadoReparacion.textContent = `En reparación con el  ${tecnicoSeleccionado.nombre}`;
                     infoContainer.appendChild(estadoReparacion);

                     setTimeout(() => 
                     {
                        alert(`Reparación en proceso, Espere un mometo porfavor`);
                     }, 1000);

                     const NuevasFallas = 
                     [
                        new NuevosFallosHardware("Altavoz dañado", "Microfono no funciona", "Puerto de carga defectuoso", "Problemas con el puerto SIM", "Problemas con el puerto auxiliar"),
                        new NuevosFallosHardware("Altavoz funciona intermitentemente", "Microfono con interferencias", "Puerto de carga no reconoce el cable", "Problemas con la tarjeta SIM", "Puerto auxiliar no responde"),
                        new NuevosFallosHardware("Altavoz produce sonido distorsionado", "Microfono demasiado bajo", "Problemas de conexión en el puerto de carga", "No detecta la tarjeta SIM", "Puerto auxiliar no detecta dispositivos"),
                        
                     ]

                    


                     // Seleccionar aleatoriamente una nueva falla
                     const nuevaFallaSeleccionada = NuevasFallas[Math.floor(Math.random() * NuevasFallas.length)];

                     setTimeout(() => 
                     {
                     const mensajeNuevaFalla = document.createElement("p");
                     mensajeNuevaFalla.textContent = `El tecnico especializado encontro nuevas fallas en su dispositivo, las cuales son,DIAGNOSTICO 2: ${nuevaFallaSeleccionada.altavoz}, ${nuevaFallaSeleccionada.microfono}, ${nuevaFallaSeleccionada.puertodecarga}, ${nuevaFallaSeleccionada.puertosim}, ${nuevaFallaSeleccionada.puertoaux}`;
                     infoContainer.appendChild(mensajeNuevaFalla);
                     }, 1000);




                     const DiagnosticoFinal = 
                     {
                        Diagnostico1: {},
                        Diagnostico2Completo: {},
                        Diagnostico2Incompleto: {}
                     };

                     setTimeout(() => 
                     {
                        const confirmacionReparacionNuevaFalla = confirm("¿Desea proceder con la reparación de las nuevas fallas?");
                    
                        if (confirmacionReparacionNuevaFalla)
                         {
                            // Diagnóstico final
                            DiagnosticoFinal.Diagnostico1 = 
                            {
                                bateria: "Bateria = Buen estado",
                                pantalla: "Pantalla = Buen estado", 
                                botoneslaterales: "Botones Laterales = Buen estado", 
                                camara: "Camara = Buen estado", 
                                ram: "Ram = Buen estado"
                            };
                    
                            DiagnosticoFinal.Diagnostico2Completo = 
                            {
                                altavoz: "Altavoz = Buen estado",
                                microfono: "Microfono = Buen estado",
                                puertodecarga: "Puerto de Carga = Buen estado",
                                puertosim: "Puerto Sim = Buen estado",
                                puertoaux: "Puerto Aux = Buen estado"
                            };
                    
                            

                            const UltimoDiagnostico = document.createElement("p");
                            UltimoDiagnostico.textContent ="DIAGNOSTICO FINAL"
                            infoContainer.appendChild(UltimoDiagnostico);



                            // Diagnóstico final con todos los elementos en buen estado
                            const mensajeDiagnosticoFinal = document.createElement("p");
                            mensajeDiagnosticoFinal.textContent = `DIAGNÓSTICO 1: ${DiagnosticoFinal.Diagnostico1.bateria}, 
                            ${DiagnosticoFinal.Diagnostico1.pantalla}, ${DiagnosticoFinal.Diagnostico1.botoneslaterales}, 
                            ${DiagnosticoFinal.Diagnostico1.camara}, ${DiagnosticoFinal.Diagnostico1.ram}  
                            DIAGNÓSTICO 2 : 
                            ${DiagnosticoFinal.Diagnostico2Completo.altavoz}, ${DiagnosticoFinal.Diagnostico2Completo.microfono}, 
                            ${DiagnosticoFinal.Diagnostico2Completo.puertodecarga}, ${DiagnosticoFinal.Diagnostico2Completo.puertosim}, 
                            ${DiagnosticoFinal.Diagnostico2Completo.puertoaux}`;
                            infoContainer.appendChild(mensajeDiagnosticoFinal);
                            

                             // Añadir alert para el depósito faltante
                             let depositoFaltante;
                             while (true) 
                            {
                              depositoFaltante = parseFloat(prompt("Ingrese el monto faltante (450$):"));

                              if (!isNaN(depositoFaltante) && depositoFaltante === 450) 
                              {
                                   alert("Gracias por confiar en nosotros.");
                                   break; // Salir del bucle si el monto es correcto
                              } 
                              else
                               {
                                 alert("Monto incorrecto. Por favor, reintente el proceso y deposite 450$.");
                               }
                            }
                            
                        } 
                        else 
                        {

                            const UltimoDiagnostico = document.createElement("p");
                            UltimoDiagnostico.textContent ="DIAGNOSTICO FINAL"
                            infoContainer.appendChild(UltimoDiagnostico);

                            DiagnosticoFinal.Diagnostico1 = 
                            {
                                bateria: "Bateria = Buen estado",
                                pantalla: "Pantalla = Buen estado", 
                                botoneslaterales: "Botones Laterales = Buen estado", 
                                camara: "Camara = Buen estado", 
                                ram: "Ram = Buen estado"
                            };
                    

                            DiagnosticoFinal.Diagnostico2Incompleto =
                             {
                                altavoz: "Altavoz = Fallando",
                                microfono: "Microfono = Fallando",
                                puertodecarga: "Puerto de Carga = Fallando",
                                puertosim: "Puerto Sim = Fallando",
                                puertoaux: "Puerto Aux = Fallando"
                            };
                            // Diagnóstico final indicando fallas en el segundo diagnóstico
                            const mensajeDiagnosticoFinal = document.createElement("p");
                            mensajeDiagnosticoFinal.textContent = `DIAGNÓSTICO 1: ${DiagnosticoFinal.Diagnostico1.bateria}, 
                            ${DiagnosticoFinal.Diagnostico1.pantalla}, ${DiagnosticoFinal.Diagnostico1.botoneslaterales}, 
                            ${DiagnosticoFinal.Diagnostico1.camara}, ${DiagnosticoFinal.Diagnostico1.ram}  
                            DIAGNÓSTICO 2 : 
                            ${DiagnosticoFinal.Diagnostico2Incompleto.altavoz}, ${DiagnosticoFinal.Diagnostico2Incompleto.microfono}, 
                            ${DiagnosticoFinal.Diagnostico2Incompleto.puertodecarga}, ${DiagnosticoFinal.Diagnostico2Incompleto.puertosim}, 
                            ${DiagnosticoFinal.Diagnostico2Incompleto.puertoaux}`;
                            
                            infoContainer.appendChild(mensajeDiagnosticoFinal);



                            let depositoFaltante;
                            while (true)
                            {
                                 depositoFaltante = parseFloat(prompt("Ingrese el monto faltante (150$):"));

                                if (!isNaN(depositoFaltante) && depositoFaltante === 150)
                                {
                                   alert("Gracias por confiar en nosotros.");
                                   break; // Salir del bucle si el monto es correcto
                                } 
                                  else 
                                {
                                 alert("Monto incorrecto. Por favor, reintente el proceso y deposite 150$.");
                                }
                            }
                        }
                     }, 6000)



                      


                
                     break;
                    } 
                 else 
                  {
                    alert("El abono debe ser de 150$. Por favor, reintente el proceso y deposite la cantidad correcta.");
                  }
                }
            });

            const botonNoProceder = document.createElement("button");
            botonNoProceder.textContent = "No";
            botonNoProceder.addEventListener("click", () => 
            {
                desactivarBoton(botonNoProceder);
                desactivarBoton(botonProceder);
                const estadoReparacion = document.createElement("p");
                estadoReparacion.textContent = "Reparación no aceptada";
                infoContainer.appendChild(estadoReparacion);
            });

            infoContainer.appendChild(botonProceder);
            infoContainer.appendChild(botonNoProceder);
        } 
        else 
        {
            const estadoReportado = document.createElement("p");
            estadoReportado.textContent = "Reparación no disponible para teléfonos reportados";
            infoContainer.appendChild(estadoReportado);
        }
    }

    function reiniciarSistema() 
    {
        location.reload(); // Recargar la página para reiniciar el sistema
    }
});