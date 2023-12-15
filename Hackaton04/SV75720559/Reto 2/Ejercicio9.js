function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
}


alert(charIndex("hello", "l"));
alert(charIndex("circumlocution", "c"));
