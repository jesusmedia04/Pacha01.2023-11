function ejercicio04(){
//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor (Pendiente)
let numero1 = parseInt (prompt ("Escribe el valor del numero1 : ") )
let numero2 = parseInt (prompt ("Escribe el valor del numero2 : ") )
let numero3 = parseInt (prompt ("Escribe el valor del numero3 : ") )

if(numero1<=numero2 && numero1<=numero3 && numero2<=numero3){
    alert(`El orden es: ${numero1}, ${numero2}, ${numero3}`);
}else if(numero1<=numero2 && numero1<=numero3 && numero2>=numero3){
    alert (`El orden es: ${numero1}, ${numero3}, ${numero2}`);
}else if(numero2<=numero1 && numero2<=numero3 && numero1<=numero3){
    alert ( `El orden es: ${numero2}, ${numero1}, ${numero3} `);
}else if(numero2<=numero1 && numero2<=numero3 && numero1>=numero3){
    alert ( `El orden es: ${numero2}, ${numero3}, ${numero1}`);

}else if(numero3<=numero1 && numero3<=numero2 && numero1<=numero2){
    alert ( `El orden es: ${numero3}, ${numero1}, ${numero2}`);
}else if(numero3<=numero1 && numero3<=numero2 && numero1>=numero2){
    alert ( `El orden es: ${numero3}, ${numero2}, ${numero1}`);
}

}