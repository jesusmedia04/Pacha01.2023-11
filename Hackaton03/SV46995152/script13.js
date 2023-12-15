/*Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal. */ 
function ejercicio13(){
    let vocal = prompt('ingrese una letra');
    let letra = vocal
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        alert('la letra es una vocal ');
    } else{
        alert('la letra no es una vocal ');
    } 

}