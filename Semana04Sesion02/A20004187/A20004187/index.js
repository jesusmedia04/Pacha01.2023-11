class Productos{
    constructor(marca, modelo, serie, precio = 0){
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
        this.precio = precio;
    }
    encender(){
        console.log(`El equipo ${this.modelo } se encendio`);
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
    constructor(marca, modelo, serie,precio, SO, resolucion, tipoPantalla){
        super(marca,modelo,serie,  precio);
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

class Persona{
    constructor(nombre,apellido,tipoDocumento,numeroDocumento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
    }
}

class Vendedor extends Persona{
    promedioVentas = 0;
    numeroVentas = 0;
    totalVentas = 0
    constructor(nombre,apellido,tipoDocumento,numeroDocumento, id, turno){
        super(nombre,apellido,tipoDocumento,numeroDocumento);
        this.id = id;
        this.turno = turno;
        
    }
    get promedioVentas(){
        return this.promedioVentas;
    }
    vender(producto){
        this.numeroVentas++;
        this.totalVentas+=producto.precio;
        this.promedioVentas = this.totalVentas/this.numeroVentas;
        console.log(`Se vendio el producto ${producto.modelo} con el numero de serie ${producto.serie}`)
    }
}

class Comprador extends Persona{
    constructor(nombre,apellido,tipoDocumento,numeroDocumento){
        super(nombre,apellido,tipoDocumento,numeroDocumento);

    }
    comprar(producto){
        console.log(`Se compro el producto ${producto.modelo} con el numero de serie ${producto.serie}`)
    }
}

let vend01 = new Vendedor("Roberto","Pineda","CE","001575291",1,"Tarde");
let compr01 = new Comprador("Karen", "Lam","DNI","464646464");

vend01.apellido = "Lopez";
console.log(vend01.apellido)


let procesoVenta = ()=>{
    compr01.comprar(tv1);
    vend01.vender(tv1);
}


// let prod1 = new Productos("LG","LG550011","SR00000001");
// let prod2 = new Productos("SONY","STK002003","SERIE01");

// console.log(prod1.modelo)
// console.log(prod2.serie)
// prod1.encender(110)
// prod2.apagar()

let tv1 = new SmartTV("LG","LG0044455","00099988811",2345.66,"WebOS","4K","LED",);
tv1.encender();
tv1.navegacionInternet("www.x-codec.net")

let barra1 = new AudioSonido("JBL","JBL3344","000234",50,"NFC, Bluetooth");
barra1.encender()
barra1.subirVolumen();


procesoVenta();
procesoVenta();

console.log(vend01.promedioVentas)
console.log(vend01.totalVentas)
console.log(vend01.numeroVentas)
