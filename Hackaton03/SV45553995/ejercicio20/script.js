/* Hacer un algoritmo en JavaScript que que lea 4 números enteros 
positivos y verifique y realice las siguientes operaciones:
 ¿Cuántos números son Pares?
 ¿Cuál es el mayor de todos?
 Si el tercero es par, calcular el cuadrado del segundo.
 Si el primero es menor que el cuarto, calcular la media de los 4 números.
 Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido
  entre los valores 50 y 700. Si cumple se cumple la segunda condición, 
  calcular la suma de los 4 números.*/
  function ejercicio20(){// Declarar variables
    var n1, n2, n3, n4, contadorPares, mayor, cuadrado, media, suma;
    
    // Leer los números
    n1 = parseInt(prompt("Ingrese el primer número: "));
    n2 = parseInt(prompt("Ingrese el segundo número: "));
    n3 = parseInt(prompt("Ingrese el tercer número: "));
    n4 = parseInt(prompt("Ingrese el cuarto número: "));
    
    // Validar que los números sean positivos
    if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
      alert("Los números deben ser positivos");
      return;
    }
    
    // Contar los números pares
    contadorPares = 0;
    if (n1 % 2 === 0) {
      contadorPares++;
    }
    if (n2 % 2 === 0) {
      contadorPares++;
    }
    if (n3 % 2 === 0) {
      contadorPares++;
    }
    if (n4 % 2 === 0) {
      contadorPares++;
    }
    
    // Calcular el mayor número
    mayor = n1;
    if (n2 > mayor) {
      mayor = n2;
    }
    if (n3 > mayor) {
      mayor = n3;
    }
    if (n4 > mayor) {
      mayor = n4;
    }
    
    // Calcular el cuadrado del segundo número si el tercero es par
    if (n3 % 2 === 0) {
      cuadrado = n2 * n2;
    }
    
    // Calcular la media de los números si el primero es menor que el cuarto
    if (n1 < n4) {
      media = (n1 + n2 + n3 + n4) / 4;
    }
    
    // Calcular la suma de los números si el segundo es mayor que el tercero y el tercero está comprendido entre 50 y 700
    if (n2 > n3 && n3 >= 50 && n3 <= 700) {
      suma = n1 + n2 + n3 + n4;
    }
    
    // Mostrar los resultados
    alert("Números pares: " + contadorPares);
    alert("Número mayor: " + mayor);
    if (cuadrado !== undefined) {
      alert("Cuadrado del segundo número: " + cuadrado);
    }
    if (media !== undefined) {
      alert("Media de los números: " + media);
    }
    if (suma !== undefined) {
      alert("Suma de los números: " + suma);
    }

    

  }