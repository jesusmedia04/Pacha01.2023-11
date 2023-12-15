// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio_01(){
    let numero = parseInt( prompt("Ingrese un número"))
    if(numero>100 && numero< 999){
        alert("Este número tiene 3 digitos")
    }
    else{
        alert("Este número no tiene 3 digitos")
    }
}

// 2. Hacer un algoritmo en JavaScript que lea un numero entero por el teclado y determinar si es negativo
function ejercicio_02(){
    let numero = parseInt( prompt("Ingrese un número"))
    if(numero<0){
        alert("Este número es negativo")
    }
    else{
        alert("Este número no es negativo")
    }
}

// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4
function ejercicio_03(){
    let numero = parseInt(prompt("Ingrese un número"))
    if (numero % 10 == 4){
        alert(`El número ${numero} termina en 4`)
    }
    else{
        alert(`El número ${numero} no termina en 4`)

    }
}

// 4. Hacer un algoritmo en JavaScript que lea tres n�meros enteros y los muestre de menor a mayor
function ejercicio_04(){
    let numero_1 = parseInt(prompt("Ingrese el primer número"))
    let numero_2 = parseInt(prompt("Ingrese el segundo número"))
    let numero_3 = parseInt(prompt("Ingrese el tercer número"))
    let temp = 0

    if (numero_2 < numero_1){
        temp = numero_1
        numero_1 = numero_2
        numero_2 = temp
    }
    if (numero_3 < numero_1){
        temp = numero_1
        numero_1 = numero_3
        numero_3 = temp
    }
    if (numero_3 < numero_2){
        temp = numero_2
        numero_2 = numero_3
        numero_3 = temp
    }
    alert(`Los números de menor a mayor son: ${numero_1}, ${numero_2}, ${numero_3}`)
}

// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio_05() {
    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));
    let precioPorZapato = 80;
    let totalSinDescuento = cantidadZapatos * precioPorZapato;

    if (cantidadZapatos > 30) {
        descuento = totalSinDescuento * 0.40;
    } else if (cantidadZapatos > 20) {
        descuento = totalSinDescuento * 0.20;
    } else if (cantidadZapatos > 10) {
        descuento = totalSinDescuento * 0.10;
    } else {
        descuento = 0;
    }

    totalConDescuento = totalSinDescuento - descuento;

    alert(`
    Total sin descuento: $${totalSinDescuento}
    Descuento aplicado: $${descuento}
    Total con descuento: $${totalConDescuento}`)
}

// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

function ejercicio_06(){
    let horasTrabajadas = parseInt( prompt ("Ingrese el número de horas trabajadas en la semana"));

    if (horasTrabajadas <= 40){
        sueldoTotal = horasTrabajadas * 20;
    }else{
        sueldoBase = 40 * 20;
        sueldoextra = (horasTrabajadas - 40) * 25;
        sueldoTotal = sueldoBase + sueldoextra;
    }

    alert(`
    Sueldo Base: $${sueldoBase}
    Sueldo Extra: $${sueldoextra}
    El sueldo total es: $${sueldoTotal}`)
}
// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//    Tipo A 10% de descuento
//    Tipo B 15% de descuento
//    Tipo C 20% de descuento
function ejercicio_07(){
    let tipoMembresia = String (prompt ("Ingrese el tipo de menbresia (A, B, C)")).toUpperCase();
    console.log(tipoMembresia)
    if (tipoMembresia !== "A" && tipoMembresia !== "B" && tipoMembresia !== "C"){
        alert("Por favor ingresar una menbresia válida (A, B ,C)");
        return        
    }

    let montoCompra = parseInt (prompt ("Ingrese el monto total de compra:"));

    switch (tipoMembresia){
        case "A":
            descuento = montoCompra * 0.10;
            break
        case "B":
            descuento = montoCompra * 0.15;
            break
        case "C":
            descuento = montoCompra * 0.20;
            break
        default:
            descuento = 0
            break
    } 

    totalPagar = montoCompra - descuento

    alert (`
    Descuento aplicado: $${descuento}
    Total a pagar con el descuento: $${totalPagar}
    `)
}

// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio_08(){
    let nota1 = parseInt(prompt("Ingrese la nota 01:"));
    let nota2 = parseInt(prompt("Ingrese la nota 02:"));
    let nota3 = parseInt(prompt("Ingrese la nota 03:"));

    let promedio = (nota1 + nota2 + nota3) / 3

    if (promedio >= 13){
        alert("El estudiante tiene nota aprobatoria de " + promedio);
    }else{
        alert("El estudiante tiene nota reprobatoria de " + promedio);
    }
}

// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
function ejercicio_09(){
    let  salarioActual = parseInt (prompt("Ingrese el salario actual del trabajador:"));

    if (salarioActual > 2000){
        aumento = salarioActual * 0.05;
    }else{
        aumento = salarioActual * 0.10;
    }

    salarioNuevo = salarioActual + aumento;

    alert ("El nuevo salario del trabajado es: $" + salarioNuevo);
}

// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio_10(){
    let numero = parseInt(prompt("Ingrese un número:"));

    if (numero % 2 == 0){
        alert ("El número " + numero + " es par");
    }else{
        alert ("El número " + numero + " no es par");
    }
}

// 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio_11(){
    let numero_1 = parseInt(prompt("Ingrese el primer número:"));
    let numero_2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero_3 = parseInt(prompt("Ingrese el tercer número:"));

    let mayor = numero_1
    if (numero_2 > mayor){
        mayor = numero_2
    }
    if (numero_3 > mayor){
        mayor = numero_3
    }

    alert ("El número mayor es: "+mayor)
};

// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio_12(){
    let numero_1 = parseInt(prompt("Ingrese el primer número:"));
    let numero_2 = parseInt(prompt("Ingrese el segundo número:"));

    let mayor = numero_1
    if (numero_2 > mayor){
        mayor = numero_2;
    }else{
        mayor = numero_1
    }

    alert("El número mayor es: " + mayor)
};

// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio_13(){
    let letra = String(prompt("Ingrese una letra:")).toLocaleLowerCase();

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        alert ("La letra " + letra + " es una vocal")
    }else{
        alert ("La letra " + letra + " no es una vocal")
    }
};

// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo. (Pendiente)
function ejercicio_14(){
    let numero = parseInt(prompt("Ingrese un número entero positivo del 1 al 10:"));

    if (numero < 1 || numero > 10){
        alert ("El número de estar entre 1 y 10");
        return
    }else if(numero == 2 || numero == 3 || numero ==5 || numero == 7){
        alert ("El número " + numero + " es primo");
    }else{
        alert ("El número " + numero + " no es primo");
    }
};

// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio_15(){
    let centimetros = parseInt (prompt("Ingrese la longitud en centímetros"));
    let libras = parseInt (prompt("Ingrese el peso en libras"));

    pulgadas = centimetros / 2.54;
    kilogramos = libras * 0.453592;

    alert (`
        La longitud en pulgadas es: ${pulgadas} P
        El peso en kilogramos es: ${kilogramos} Kg
        `);
};

// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio_16(){
    let numero = parseInt (prompt("Ingrese un número del 1 al 7:"));

    switch (numero){
        case 1:
            alert ("Lunes");
            break
        case 2:
            alert ("Martes");
            break
        case 3:
            alert ("Miércoles");
            break
        case 4:
            alert ("Jueves");
            break
        case 5:
            alert ("Viernes");
            break
        case 6:
            alert ("Viernes");
            break
        case 7:
            alert ("Sábado");
            break
        default:
            alert ("Número no valido, Ingrese un número del 1 al 7");
            break
    }
};

// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio_17(){
    let horas = parseInt(prompt("Ingrese las horas:"));
    let minutos = parseInt(prompt("Ingrese los minutos:"));
    let segundos = parseInt(prompt("Ingrese los segundos:"));

    limiter = 59;
    segundos += 1;
    if (segundos > limiter){
        segundos = 0;   
        minutos += 1;
        if(minutos > limiter){
            minutos = 0;
            horas += 1;
            if (horas > 23){
                horas = 0;
            }
        }
    }

    alert(`La hora un segundo despues será: ${horas}:${minutos}:${segundos}`);
};

// 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//     $10. Si se compran unidades separadas hasta 9.
//     $8. Si se compran entre 10 unidades hasta 99.
//     $7. Entre 100 y 499 unidades.
//     $6. Para mas de 500 unidades.
//     La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
function ejercicio_18(){
    let cantidad = parseInt (prompt ("Ingrese la cantidad de CDs a comprar:"));

    if (cantidad >= 500){
        precioUnitario = 6;
    }else if(cantidad >= 100){
        precioUnitario = 7;
    }else if(cantidad >= 10){
        precioUnitario = 8;
    }else{
        precioUnitario = 10;
    }

    precioTotal = cantidad * precioUnitario;
    ganacia = precioTotal * 0.0825;

    alert (`
        Precio total: $${precioTotal}
        Ganacia del vendedor: $${ganacia}
    `)
};


// 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//     Cajero (56$/día).
//     Servidor (64$/día).
//     Preparador de mezclas (80$/día).
//     Mantenimiento (48$/día).
//     El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
function ejercicio_19(){
    let identificador = parseInt(prompt(`
    Ingrese el identificador según la lista:
    1 Cajero
    2 Servidor
    3 Preparador de mesclas
    4 Mantenimiento
    `));

    let diasTrabajadas = parseInt(prompt("Ingrese la cantidad de días trabajados en la seman (máximo 6)"));

    if (diasTrabajadas > 6){
        alert ("Los días trabajados no puede ser mayor a 6");
    }else{
        switch(identificador){
            case 1:
                salarioDiario = 56;
                break
            case 2:
                salarioDiario = 64;
                break
            case 3:
                salarioDiario = 80;
                break
            case 4:
                salarioDiario = 48;
                break
            default:
                alert ("Identicador de empleado no válido");
        }

        salarioTotal = salarioDiario * diasTrabajadas;
        alert ("El salario total a pagar al empleado es: $"+salarioTotal)
    }
};

// 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//     ¿Cuántos números son Pares?
//     ¿Cuál es el mayor de todos?
//     Si el tercero es par, calcular el cuadrado del segundo.
//     Si el primero es menor que el cuarto, calcular la media de los 4 números.
//     Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

function ejercicio_20(){
    let numero_1 = parseInt(prompt("Ingrese el primer número"));
    let numero_2 = parseInt(prompt("Ingrese el segundo número"));
    let numero_3 = parseInt(prompt("Ingrese el tercero número"));
    let numero_4 = parseInt(prompt("Ingrese el cuarto número"));
    let contadorPares = 0;
    let media = 0;
    let suma = 0;

    if(numero_1 % 2 == 0){contadorPares += 1};
    if(numero_2 % 2 == 0){contadorPares += 1};
    if(numero_3 % 2 == 0){contadorPares += 1};
    if(numero_4 % 2 == 0){contadorPares += 1};
    
    mayor = numero_1;
    if(numero_2 > mayor){mayor = numero_2};
    if(numero_3 > mayor){mayor = numero_3};
    if(numero_4 > mayor){mayor = numero_4};
    
    if(numero_3 % 2 == 0){cuadrado = numero_2 * numero_2};

    if(numero_1 < numero_4){
        media = (numero_1+numero_2+numero_3+numero_4)/4
    };

    if(numero_2 > numero_3 && numero_3 >= 50 && numero_3 <=700){
        suma = numero_1+numero_2+numero_3+numero_4;
    };

    alert (`
    La cantidad de números pares es: ${contadorPares}
    El número mayor es: ${mayor}
    El cuadrado del segundo número es: ${cuadrado}
    Media de los cuatro números es: ${media}
    Suma de los cuatro númeroses: ${suma}
    `)

};

// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio_21(){
    let numero = parseInt(prompt("Ingrese número entero no negativo:"));

    if (numero < 0){
        alert("El numero no puede ser negativo")
    }else{
        for (i = numero - 1;i >= 1; i--){
            numero *= i;
        }
        alert ("El factorial es: " + numero);
    }
};

// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio_22(){
    let numero = parseInt(prompt("Ingrese un numero entero positivo:"));
    let suma = 0;

    if(numero < 1){
        alert ("El número debe ser positivo")
    }else{
        for (i = 1; i <= numero; i++) {
            suma += i;             
        }
        alert ("La suma de los primeros "+numero+" es " +suma)
    }
}

// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio_23() {
    let n = parseInt(prompt("Ingrese un número entero positivo:"));
    let suma = 0;

    if (n < 1) {
        alert("El número debe ser positivo.");
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                suma += i;
            }
        }
        alert("La suma de los números impares menores o iguales a " + n + " es: " + suma);
    }
};
// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio_24() {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    alert("La suma de los números pares hasta 1000 es: " + suma);
};

// 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio_26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));

    if (divisor === 0) {
        alert("El divisor no puede ser cero.");
    } else {
        let cociente = 0;
        while (dividendo >= divisor) {
            dividendo -= divisor;
            cociente++;
        }
        alert(`
        El cociente es: ${cociente}
        El resto es: ${dividendo}
        `);
    }
}

// 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
function ejercicio_27() {
    let suma = 0;
    let contador = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Ingrese un número negativo para terminar:"));
        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } while (numero >= 0);

    if (contador > 0) {
        let media = suma / contador;
        alert("La media de los números ingresados es: " + media);
    } else {
        alert("No se ingresaron números positivos.");
    }
};


// 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio_28() {
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert("La suma de los primeros 100 números es: " + suma + " con ciclo (repetir)");
};

// 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio_29() {
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert("La suma de los primeros 100 números es: " + suma );
};
// 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio_30() {
    let suma = 0;

    for (let contador = 1; contador <= 100; contador++) {
        suma += contador;
    }

    alert("La suma de los primeros 100 números es: " + suma + " con ciclo (para)");
}

//     31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio_31() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;
    let mediaPares, mediaImpares;

    for (let i = 1; i <= 10; i++) {
        let num = parseFloat(prompt("Ingrese el número " + i + ":"));
        
        if (num % 2 === 0) {
            sumaPares += num;
            contadorPares++;
        } else {
            sumaImpares += num;
            contadorImpares++;
        }
    }

    if (contadorPares > 0) {
        mediaPares = sumaPares / contadorPares;
    }
    
    if (contadorImpares > 0) {
        mediaImpares = sumaImpares / contadorImpares;
    }
    alert(`
    La media de los números pares es: ${mediaPares}
    La media de los números impares es: ${mediaImpares}
    `);
}


// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
function ejercicio_32(){
    alert("NO HAY DATOS SUFUCIENTES")
} 
// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio_33() {
    let eleccion;

    do {
        eleccion = prompt("Desea continuar con el programa? (S/N): ");
    } while (eleccion !== "N" && eleccion !== "n");
}

// 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
function ejercicio_34() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
    }
}

// 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
function ejercicio_35() {
    let mayorcito = -Infinity;
    let menorcito = Infinity;

    for (let i = 1; i <= 20; i++) {
        let number = parseInt(prompt("Ingrese el número " + i + ": "));

        if (number > mayorcito) {
            mayorcito = number;
        }

        if (number < menorcito) {
            menorcito = number;
        }
    }

    alert("El número mayor es: " + mayorcito);
    alert("El número menor es: " + menorcito);
}


// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio_36() {
    let a = 0;
    let b = 1;
    let c;
    let terminos = parseInt(prompt("Ingrese la cantidad de términos: "));

    console.log("La serie de Fibonacci para " + terminos + " términos:");
    for (let i = 1; i <= terminos; i++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}

// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio_37() {
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let resto;

    while (num2 !== 0) {
        resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }

    alert("El M.C.D es: " + num1);
};


// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio_38() {
    let num1 = parseInt(prompt("Ingrese el número: "));
    let sumaDivisores = 0;

    for (let i = 1; i <= num1 / 2; i++) {
        if (num1 % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === num1) {
        alert("El número ingresado es un número perfecto.");
    } else {
        alert("El número ingresado no es un número perfecto.");
    }
};

// 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//     Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
function ejercicio_39(){
    alert("No pude hacerlo :V")
} 
// 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//     Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
function ejercicio_40(){
    alert("No pude hacerlo :V")
} 

