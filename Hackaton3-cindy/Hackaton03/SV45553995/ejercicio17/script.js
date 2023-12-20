// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos 
// calcule la hora dentro de un segundo.
function ejercicio_17(){
    let horas = parseInt(prompt("Ingrese las horas:"));
    let minutos = parseInt(prompt("Ingrese los minutos:"));
    let segundos = parseInt(prompt("Ingrese los segundos:"));

    limiter = 59;
    segundos += 1;
    if (segundos > limiter){
        segundos = 0;   
        minutos += 1;
        if(minutos > limiter){
            minutos = 0;
            horas += 1;
            if (horas > 23){
                horas = 0;
            }
        }
    }

    alert(`La hora un segundo despues será: ${horas}:${minutos}:${segundos}`);
};
