cclass Productos{
    constructor(marca, modelo, serie){
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
    }
    encender(){
        console.log(`El equipo ${this.modelo} se encendio`);
    }
    encender(voltaje){
        if(voltaje < 220){
            console.log("Necesitamos un transformador")
        }else
            console.log(`El equipo ${this.modelo} se encendio`);
    }
    apagar(){
        console.log(`El equipo ${this.modelo} se apago`);
        // console.log("El equipo " + this.modelo + " se apago")
    }
}

class SmartTV extends Productos {
    constructor(marca, modelo, serie, SO, resolucion, tipoPantalla){
        super(marca,modelo,serie);
        this.SO = SO;
        this.resolucion = resolucion;
        this.tipoPantalla = tipoPantalla;
    }
    reproducionVideo(){
        console.log("Reproduciendo Video")
    }
    reproduccionAudio(){
        console.log("Reproduciendo Audio")
    }
    navegacionInternet(url){
        console.log("Navegando por Internet en la pagina: "+url)
    }
}

class AudioSonido extends Productos{
    constructor(marca, modelo, serie, vatios, conectividad){
        super(marca, modelo, serie);
        this.vatios = vatios;
        this.conectividad = conectividad;
    }
    subirVolumen(){
        console.log("Se esta subiendo el volumen");
    }
    bajarVolumen(){
        console.log("Se esta bajando el volumen");
    }
}


// let prod1 = new Productos("LG","LG550011","SR00000001");
// let prod2 = new Productos("SONY","STK002003","SERIE01");

// console.log(prod1.modelo)
// console.log(prod2.serie)
// prod1.encender(110)
// prod2.apagar()

let tv1 = new SmartTV("LG","LG0044455","00099988811","WebOS","4K","LED");
tv1.encender();
tv1.navegacionInternet("www.x-codec.net")

let barra1 = new AudioSonido("JBL","JBL3344","000234",50,"NFC, Bluetooth");
barra1.encender()
barra1.subirVolumen();

