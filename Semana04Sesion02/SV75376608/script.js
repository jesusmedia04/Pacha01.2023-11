//Clases
class Producto {
    constructor(marca, modelo, serie) {
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
    }

    encender() {
        console.log(`El equipo ${this.modelo} se encendio`)
    }

    encender(voltaje) {
        if (voltaje > 220) {
            console.log("Necesitamos un transformador");
        } else {
            console.log("Conectalo sin nigun problema");
        }
    }
    apagar() {
        console.log(`El equipo ${this.modelo} se apagó`)
        console.log()
    }
}

class SmartTV extends Producto {
    constructor(marca, modelo, serie, SO, resolucion, tipoPantalla) {
        super(marca, modelo, serie);
        this.SO = SO;
        this.resolucion = resolucion;
        this.tipoPantalla = tipoPantalla;

    }
}

class AudioSonido extends Producto {
    constructor(marca, modelo, serie, vatios, conectividad) {
        super(marca, modelo, serie);
        this.vatios = vatios;
        this.conectividad = conectividad;
    }

    subirVolumen() {
        console.log("Se está subiendo el volumen")
    }

    bajarVolumen() {
        console.log("Se está bajando el volumen")
    }
}

//Clase padre Persona 
class Persona {
    constructor(nombre, apellido, edad, dni, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.telefono = telefono
    }

    caminar(){
        console.log("La  persona esta caminando hacia su destino")
    }

    despedir(){
        console.log("La  persona se despide y retorna a su hogar")
    }
}

class Vendedor extends Persona {

    constructor(nombre, apellido, edad, dni, telefono, posicion, sueldo) {
        super(nombre, apellido, edad, dni, telefono);
        this.posicion = posicion;
        this.sueldo = sueldo;
    }
    remuneracion(pos , suel){
        console.log(`El vendedor en la posicion ${this.pos} recibirá ${this.suel}`)
    }
    
}

class Cliente extends Persona {
    constructor(nombre, apellido, edad, dni, telefono, metodoPago) {
        super(nombre, apellido, edad, dni, telefono);
        this.metodoPago = metodoPago;
    }
    pago(formaPago) {
        console.log(`El clientes pagará con ${formaPago}`);
    }

    comprar(produc){
        console.log(`El cliente comprará ${produc}`);
    }

}




let producto1 = new Producto("LG","LG55001","SR00001")
let producto2 = new Producto("HP","Pavillon","HP00010")

console.log(producto1.marca)
console.log(producto2.serie)
producto2.encender(240)
producto1.apagar()

let tv1 = new SmartTV("LG", "LG00045", "00099988811", "WebOS", "4K", "LED");

console.log(tv1)
tv1.encender(240)

let barra1 = new AudioSonido("JBL", "JBL3344", "00234", 50, "NFS, Bluetooth")

barra1.encender();
barra1.subirVolumen();

let vendedor = new Vendedor("Iban","Sanchez",24,"92556332","987654321","Cajero", 1500.00);
vendedor.caminar();
vendedor.remuneracion();
vendedor.despedir();

let cliente = new Cliente("Iban","Sanchez",24,"92556332","987654321","Tarjeta");
cliente.pago("Tarjeta");
cliente.despedir();

let procesoVenta = ()=>{
    cliente.comprar(producto1.marca + ", modelo : " + producto1.modelo);
}

procesoVenta();