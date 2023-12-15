function sumarNumeros() {
    const numero1 = parseFloat(prompt("Ingrese el primer numero:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo numero:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        return "Por favor ingrese numero válidos";
    } else {
        return numero1 + numero2;
        
    }
}

const resultado = sumarNumeros();
alert(resultado);
