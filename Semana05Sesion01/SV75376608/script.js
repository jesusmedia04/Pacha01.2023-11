class Vehiculo {
    constructor(numPlaca , color , marca , velocidad){
        this.numPlaca = numPlaca,
        this.color = color,
        this.marca = marca,
        this.velocidad = velocidad
    }


    acelerar(){
        return `El vehiculo  de la marca ${this.marca} está acelerando a ${this.velocidad} KM/H`
    }

    frenar(){
        return `El vehiculo  de la marca ${this.marca} está frenando`
    }

}


class Auto extends Vehiculo{
    constructor(numPlaca,color,marca,velocidad){
        super(numPlaca,color,marca,velocidad),
        this.aireAcondicionado = false
    }

    encenderAireAcondicionado(){
        if(!this.aireAcondicionado){
            this.aireAcondicionado = true;
        }else{
            return `El aire acondicionado ya está en funcionamiento`
        }
    }

    getAireAcondicionado(){
        return this.aireAcondicionado
    }

    setAireAcondicionado(estado){
        this.aireAcondicionado = estado
    }

}

class Moto extends Vehiculo{
    constructor(numPlaca,color,marca,velocidad){
        super(numPlaca,color,marca,velocidad),
        this.enUnaSolaRueda = false
    }

    correrEnUnaRueda(){
        if(!this.enUnaSolaRueda){
            this.enUnaSolaRueda=true;

        }else{
            return `Ya corre en una sola rueda`
        }
    }
}

let bmw = new Auto("00112233","Azul","BMW",250)
console.log(bmw.acelerar())
console.log(bmw.frenar())
console.log(bmw.encenderAireAcondicionado())
console.log(bmw.encenderAireAcondicionado())
console.log(bmw.getAireAcondicionado())


function Persona(nombre,apellido,edad,sexo) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.sexo = sexo

    return `SOy ${this.nombre} y tengo ${this.edad} años`
}

let per1 = new Persona("Jorge","Sanchez",19,"Maculino")
per1.prototype.tipoSangre = "O RH+"

console.log(per1)