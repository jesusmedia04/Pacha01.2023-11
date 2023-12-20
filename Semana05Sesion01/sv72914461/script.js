class vehiculo{

constructor(numPlaca, color, marca, velocidad){

this.numPlaca = numPlaca;
this.color = color;
this.marca=marca;
this.velocidad=velocidad;

}

acelerar(){

    return ` el vehiculo ${this.marca} esta acelerando a ${this.velocidad}`;


}
frenar(){

return ` el vehiculo ${this.marca} esta frenando`;
}

}

class auto extends vehiculo{
constructor(numPlaca,color,marca,velocidad){
    super(numPlaca,color,marca,velocidad);
    this.aireacondicionado = false;

}
encenderAireAcondicionado(){

    if(!this.aireacondicionado){
        this.aireacondicionado = tue;
        return"Se ha encedido el aire acondiconado";

    }else{

        return"El aire acondiconado esta en funcionamiento";
    }
}

}

class moto extends vehiculo{
    constructor(numPlaca,color,marca,velocidad){
        super(numPlaca,color,marca,velocidad);
        this.enUnaSolarueda = false;

    }

correrEnUnaSolaRueda(){

    if(!this.enUnaSolarueda){
        this.enUnaSolarueda = tue;
        return"corriendo en una sola rueda";

    }else{

        return"Ya esta corriendo en una sola rueda";
    }

}

}

let bmw = new auto("001213","azul","VMW",250);
console.log(bmw.acelerar());
console.log(bmw.frenar());
console.log(bmw.encenderAireAcondicionado());

let yamaha = new auto ("001","Negro","yamaha",120);
console.log(yamaha.acelerar());

