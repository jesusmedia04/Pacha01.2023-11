function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Ingrese la base del triángulo:"));
    const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor ingrese valores numericos calidos.");
    } else {
        const area = (base * altura) / 2;
        alert("El area del triangulo es: " + area);
    }
}

