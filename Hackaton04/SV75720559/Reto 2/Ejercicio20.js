function vreplace(cadena, nuevaVocal) {
    return cadena.replace(/[aeiou]/gi, nuevaVocal);
}

const resultado = vreplace("apples and bananas", "u");
alert(resultado); 
    