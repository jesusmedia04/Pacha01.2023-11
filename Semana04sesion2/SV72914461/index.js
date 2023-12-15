class Productos{
    constructor(marca, modelo,serie){
        this.marca=marca;
        this.modelo=modelo;
        this.serie=serie;
    }
    encender(){
        console.log(`El equipo  ${this.modelo} se encendio`);
    }
    encender(voltaje){
        if(voltaje < 220){
            console.log("necesitamos transformadores");
        }else{
            console.log(`El equipo  ${this.modelo} se encendio`);

        }
    }
}
    class smartTV extends Productos {
        constructor(marca,modelo,serie,SO,resolucion,tipoPantalla){
            super(marca,modelo,serie);
            this.SO=SO;
            this.resolucion=resolucion;
            this.tipoPantalla=tipoPantalla;
        }

        apagar(){
        console.log(`El equipo  ${this.modelo} se encendio`);
    }
}

//let prod1= new Productos("LG","STJ0000","SERIE02");
//let prod2= new Productos("SONY","STK002003","SERIE01");

//console.log(prod1.marca)
//console.log(prod2.serie)
//prod1.encender(10)
////prod2.apagar()

let tv1=new smartTV("LG","LG000","00995952515","WEBOS","4K","LED");
tv1.encender();