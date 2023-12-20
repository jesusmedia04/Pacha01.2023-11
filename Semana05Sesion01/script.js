class Vehiculo {
constructor(numPlaca, color, marca, velocidad){
this.numPlaca= numPlaca;
this.color= color;
this.marca=marca;
this.velocidad=velocidad;


}

acelerar(){
    return'El vehiculo ${this.marca} esta acelando a ${this.velocidad}';
}
 frenar (){
    return'El vehiculo ${this.marca} esta frenando a ${this.velocidad}';


 }
}
class Auto extends Vehiculo { 
    constructor(numPlaca, color, marca, velocidad){
      super(numPlaca,color,marca,velocidad);
this.aireAcondicionado=false;
}
encenderAireAcondicionado(){
    if ( !this.aireAcondicionado){
        this.aireAcondicionado= true;
return" Se ha activado el aire acondicionado";
    }else
    return " Ya se encuentra el aire acondicionado en funcionamiento";

}
}
class Moto extends Vehiculo{
    constructor(numPlaca,color,marca,velocidad){
        super(numPlaca, color, marca, velocidad);
        this.enUnasolaRueda= false;

    }
    correrEnUnaSolaRueda(){
        if(!this.enUnaSolaRueda){
            this.enUnaSolaRueda=true;
            return " Corriendo en una sola rueda"

        }else{
            return"Ya esta corriendo en una sola rueda"

        }
    }
}

let bmw= new Auto("00001","Azul","BMW", 250);
console.log(bmw.acelerar());
