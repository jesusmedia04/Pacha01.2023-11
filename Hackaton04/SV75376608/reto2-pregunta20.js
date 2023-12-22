//Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

let cadena = "apples and bananas";

String.prototype.vreplace = function vreplace(vocal){
    
   
    return this.replaceAll( /[a|e|i|o|u]/g , vocal)
    
    
}




console.log(cadena.vreplace("u"))