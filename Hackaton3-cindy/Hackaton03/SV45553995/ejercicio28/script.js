// 28. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio28() {

let contador = 1;
let suma = 0;


do {
    suma += contador;
    contador++;
} while (contador <= 100);


alert("La suma de los primeros cien números es : " + suma);

}


