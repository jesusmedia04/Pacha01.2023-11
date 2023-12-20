function ejercicio15(){
//Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas
// y libras a kilogramos.

let convertir = prompt ("¿Desea convertir distancia o peso?")

switch (convertir){
    case "distancia": 
        let distancia = prompt ("Ingrese la distancia en centímetros:")
        pulgadas = distancia / 2.54;

        alert("Las pulgadas son: "+pulgadas)
        break;
    case "peso": 
        let peso = prompt ("Ingrese el peso en libras:")
        kilo = peso * (1 / 2.21);

        alert("Los kilogramos son : "+kilo)
        break;    
    default:
        alert("opción inválida")
        break;

}


}