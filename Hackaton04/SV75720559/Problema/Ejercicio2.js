function calcularPotencia() {
    const base = parseInt(prompt("Ingrese el numero base:"));
    const exponente = parseInt(prompt("Ingrese el exponente:"));

    if (!isNaN(base) && !isNaN(exponente)) {
        const resultado = Math.pow(base, exponente);
        alert(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);
    } else {
        alert("Por favor, ingrese numeros válidos.");
    }
}
