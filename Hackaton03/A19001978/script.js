function imprimir(resultado) {
    let divResultado = document.getElementById('divResultado')
    divResultado.innerHTML = resultado
}

// 1. Hacer un algoritmo en JavaScript que lea un número por el 
// teclado y determinar si tiene tres dígitos.
function ejercicio_1() {
    let numero = parseInt(prompt("Ingrese un numero: "))

    if (numero >= 100 & numero <= 999) {
        imprimir("El numero tiene 3 digitos")
    } else {
        imprimir("El numero no tiene 3 digitos")
    }
}

/**2. Hacer un algoritmo en JavaScript que lea un número entero 
por el teclado y determinar si es negativo.*/
function ejercicio_2() {
    let numero = parseFloat(prompt("Ingrese el numero a valuar: "))

    if (numero < 0) {
        imprimir(`El numero ${numero} es negativo`)
    } else {
        imprimir(`El numero ${numero} es positivo`)
    }
}

/**
 * 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
 */
function ejercicio_3() {
    let numero = parseInt(prompt("Ingrese el numero a evaluar: "))

    if (numero % 10 === 4) {
        imprimir("El numero termina en 4")
    } else {
        imprimir("El numero no termina en 4")
    }
}

/**
 * 4. Hacer un algoritmo en JavaScript que lea tres números 
 * enteros y los muestre de menor a mayor.
 */
function ejercicio_4() {
    let num1 = parseInt(prompt("Ingrese el primer numero: "))
    let num2 = parseInt(prompt("Ingrese el segundo numero: "))
    let num3 = parseInt(prompt("Ingrese el tercer numero"))
    let aux = 0

    if (num1 > num2) {
        aux = num1
        num1 = num2
        num2 = aux
    }

    if (num1 > num3) {
        aux = num1
        num1 = num3
        num3 = aux
    }

    if (num2 > num3) {
        aux = num2
        num2 = num3
        num3 = aux
    }

    imprimir(`Los numeros ordenados de menor a mayor son: ${num1}, ${num2}, ${num3}`)
}

/**
 * 5. Hacer un algoritmo en JavaScript para una tienda de zapatos 
 * que tiene una promoción de descuento para vender al mayor, esta 
 * dependerá del número de zapatos que se compren. Si son más de diez, 
 * se les dará un 10% de descuento sobre el total de la compra; si el número 
 * de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de 
 * descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
 * El precio de cada zapato es de $80.
 */
function ejercicio_5() {
    let zapatosComprados = parseInt(prompt("Ingrese el numero de zapatos comprados:"))
    let descuento = 0
    let precioUnidad = 80
    let precioTotal = zapatosComprados * precioUnidad
    let precioFinal = 0

    if (zapatosComprados >= 30) {
        descuento = precioTotal * 0.4
    } else if (zapatosComprados >= 20) {
        descuento = precioTotal * 0.2
    } else if (zapatosComprados >= 10) {
        descuento = precioTotal * 0.1
    } else {
        descuento = 0
    }

    if (zapatosComprados > 0) {
        precioFinal = precioTotal - descuento
        imprimir(`Cantidad zapatos comprado: ${zapatosComprados} <br>
        Precio por unidad: $.${precioUnidad} <br>
        Precio Total: $.${precioTotal} <br>
        Descuento: $.${descuento} <br>
        Precio Final: $.${precioFinal}`)
    } else {
        imprimir("Ingrese un valor valido")
    }
}

/**
 * 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a 
 * saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas 
 * o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
 * entonces las horas extras se le pagarán a $25 por hora.
 */
function ejercicio_6() {
    let horasTrabajadas = parseInt(prompt("Ingrese la horas trabajadas: "))
    let sueldoHora = 0
    let sueldoFinal = 0

    if (horasTrabajadas <= 40) {
        sueldoHora = 20
    } else {
        sueldoHora = 25
    }

    sueldoFinal = horasTrabajadas * sueldoHora

    imprimir(`Horas trabajadas: ${horasTrabajadas} <br>
    Sueldo por hora: S/. ${sueldoHora} <br>
    Sueldo Final: S/. ${sueldoFinal}`)
}

/**
 * 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un 
 * descuento por compra a sus clientes con membresía dependiendo de su tipo, 
 * sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos 
 * son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento
 */
function ejercicio_7() {
    let tipoMembresia = prompt("Ingrese su tipo de membresia: ").toUpperCase()
    let costoCompra = parseFloat(prompt("Ingrese el costo de su compra: "))

    let descuento = 0
    let tipoDescuento = ""
    let costoFinal = 0

    switch (tipoMembresia) {
        case 'A':
            tipoDescuento = "Tiene un descuento del 10%"
            descuento = costoCompra * 0.1
            break
        case 'B':
            tipoDescuento = "Tiene un descuento del 15%"
            descuento = costoCompra * 0.15
            break
        case 'C':
            tipoDescuento = "Tiene un descuento del 20%"
            descuento = costoCompra * 0.2
        default:
            tipoDescuento = "Tipo de membresia invalida, no tiene descuento :C"
    }

    costoFinal = costoCompra - descuento

    imprimir(`El valor de su compra es: ${costoCompra} <br>
    Su tipo de membresia es: ${tipoMembresia} <br>
    ${tipoDescuento} = S/. ${descuento} <br>
    Costo final: S/. ${costoFinal}`)
}

/**
 * 8. Hacer un algoritmo en JavaScript 
 * para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
 */
function ejercicio_8() {
    let nota1 = parseInt(prompt("Ingrese la primera nota: "))
    let nota2 = parseInt(prompt("Ingrese la segunda nota: "))
    let nota3 = parseInt(prompt("Ingrese la tercera nota: " ))

    let promedio = (nota1 + nota2 + nota3) / 3
    let estado = ""

    if (promedio >= 11) {
        estado = "Aprobado"
    } else {
        estado = "Desaprobado"
    }

    imprimir(`Su promedio es: ${promedio} <br>
    El alumno está: ${estado}`)
}

/**
 * 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
 * se debe tomar en cuenta que si ganaba más de 
 * $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
 */

function ejercicio_9() {
    let sueldoInicial = parseFloat(prompt("Ingrese su sueldo actual: "))
    let aumento = 0
    let sueldoFinal = 0

    if (sueldoInicial > 2000) {
        aumento = sueldoInicial * 0.05
    } else {
        aumento = sueldoInicial * 0.1
    }

    sueldoFinal = sueldoInicial + aumento

    imprimir(`Sueldo inicial: S/. ${sueldoInicial} <br>
    Aumento: S/. ${aumento} <br>
    Sueldo Final: S/. ${sueldoFinal}`)
}

// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio_10() {
    let numeroEvaluar = parseInt(prompt("Ingrese un numero entero: "))

    if (numeroEvaluar % 2 === 0) {
        imprimir(`El numero ${numeroEvaluar} es par`)
    } else {
        imprimir(`El numero ${numeroEvaluar} es impar`)
    }
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio_11() {
    let num1 = parseInt(prompt("Ingrese el primer numero: "))
    let num2 = parseInt(prompt("Ingrese el segundo numero: "))
    let num3 = parseInt(prompt("Ingrese el tercer numero: "))

    let numMayor = -9999

    if (num1 > numMayor) {
        numMayor = num1
    }
    if (num2 > numMayor) {
        numMayor = num2
    }
    if (num3 > numMayor) {
        numMayor = num3
    }

    imprimir(`El numero mayor es: ${numMayor}`)
}

// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio_12() {
    let num1 = parseInt(prompt("Ingrese el primer numero: "))
    let num2 = parseInt(prompt("Ingrese el segundo numero: "))

    if (num1 > num2) {
        imprimir(`El numero mayor es: ${num1}`)
    } else {
        imprimir(`El numer mayor es: ${num2}`)
    }
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio_13() {
    let letraEvaluar = prompt("Ingrese la letra a evaluar: ").toLowerCase()

    switch (letraEvaluar) {
        case 'a':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'e':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'i':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'o':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'u':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        default:
            imprimir(`No es una vocal`)            
    }
}

// 14. Hacer un algoritmo en JavaScript que lea un entero
// positivo del 1 al diez y al 9 y determine si es un número primo.
function ejercicio_14() {
    let bandera = true
    let numero = 0

    while (bandera) {
        numero = parseInt(prompt("Ingrese el numero a evaluar: "))

        if (numero <=0 || numero > 9) {
            alert("Ingrese un numero entero entre 1 y 9")
        } else {
            bandera = false
        }
    }

    //Evaluar si el numero es primo
    let contDivisores = 0
    
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contDivisores++
        }
    }   

    if (contDivisores === 2) {
        imprimir(`El numero ${numero} es primo`)
    } else {
        imprimir(`El numero ${numero} no es primo`)
    }
}

// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio_15() {
    let operacion = parseInt(prompt(`Ingrese 1 o 2 según la operación que desea realizar: 
    \n1. Convertir de centimetro a pulgadas
    \n2. Cnvertir libras a kilos`))

    let valorIngresado = 0
    let valorConvertido = 0

    switch (operacion) {
        case 1:
            valorIngresado = parseInt(prompt("Ingrese los centimetros a convertir: "))
            valorConvertido = valorIngresado / 2.5387
            imprimir(`${valorIngresado} centimetros es igual a ${valorConvertido} pulgadas`)
            break
        case 2:
            valorIngresado = parseInt(prompt("Ingrese las libras a convertir: "))
            valorConvertido = valorIngresado * 0.45359237
            imprimir(`${valorIngresado} libras es igual a ${valorConvertido} kilos`)
            break
        default: 
            imprimir(`Valor ingresado invalido`)
    }
}

/**
 * 16. Hacer un algoritmo en JavaScript que lea un 
 * número y según ese número, indique el día que corresponde.
 */
function ejercicio_16() {
    let numero = parseInt(prompt("ingrese un numero de 1 al 7: "))
    let dia = ""

    switch (numero) {
        case 1:
            dia = "Lunes"
            break
        case 2:
            dia = "Martes"
            break
        case 3:
            dia = "Miercoles"
            break
        case 4:
            dia = "Jueves"
            break
        case 5:
            dia = "Viernes"
            break
        case 6:
            dia = "Sabado"
            break
        case 7:
            dia = "Domingo"
            break
        default:
            imprimir("Valor invalido")
    }

    if (numero >= 1 && numero <= 7) {
        imprimir(`El día es: ${dia}`)
    }
}

/**
 * 17. Hacer un algoritmo en JavaScript donde se ingrese una hora 
 * y nos calcule la hora dentro de un segundo.
 */
function ejercicio_17() {
    let hora = parseInt(prompt("Ingrese la hora: "))
    let minutos = parseInt(prompt("Ingrese los minutos: "))
    let segundos = parseInt(prompt("Ingrese los segundos: "))

    segundo++

    if (segundos >= 60) {
        segundos = 0
        minutos++
    }

    if (minutos >= 60) {
        minutos = 0
        hora++
    }

    if (hora >= 24) {
        hora -= 24
    }

    imprimir(`Hora pasado un segundo: ${hora}:${minutos}:${segundos}`)
} 

/**
 * 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y
 * distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
 * (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un 
    algoritmo en JavaScript que dado un número de CDs a vender calcule el 
    precio total para el cliente y la ganancia para el vendedor.
 */
 function ejercicio_18() {
    let cdVendidos = parseInt(prompt("Ingrese la cantidad de CDs vendidos: "))
    let precioCD = 0
    let precioFinal = 0

    if (cdVendidos >= 1 && cdVendidos <= 9) {
        precioCD = 10
    }

    if (cdVendidos >= 10 && cdVendidos <= 99) {
        precioCD = 8
    }

    if (cdVendidos >= 100 && cdVendidos <= 499) {
        precioCD = 7
    }

    if (cdVendidos >= 500) {
        precioCD = 6
    }

    precioFinal = cdVendidos * precioCD

    imprimir(`Total CDs vendidos: ${cdVendidos} <br>
    Precio x CD: ${precioCD} <br>
    Precio Final: ${precioFinal}`)
 }

 /**
  * 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 
  * tipos de empleados ordenados de la siguiente forma con su número 
  * identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese 
    dos números enteros que representen al número identificador del 
    empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
    Y el programa le mostrará por pantalla la cantidad de dinero que el dueño 
    le debe pagar al empleado que ingresó
  */
 function ejercicio_19() {
    let tipoEmpleado = 0
    let diasTrabajo = 0
    let tarifa = 0
    let sueldoFinal = 0
    let bandera = true

    while (bandera) {
        tipoEmpleado = parseInt(prompt("Ingrese el numero que corresponda al tipo de empleado (1 - 4):" +
        "\n1. Cajero ($56)" + 
        "\n2. Servidor ($64)" +
        "\n3. Preparador de mezclas ($80)" + 
        "\n4. Mantenimiento ($48)"))

        if (tipoEmpleado === 1 || tipoEmpleado === 2 || tipoEmpleado === 3 || tipoEmpleado ===4) {
            bandera = false
        }
    }

    bandera = true

    while (bandera) {
        diasTrabajo = parseInt(prompt("Ingrese los dias trabajados como maximos 6 dias"))

        if (diasTrabajo > 0 && diasTrabajo <= 6) {
            bandera = false
        }
    }

    switch (tipoEmpleado) {
        case 1:
            tarifa = 56
            break
        case 2:
            tarifa = 64
            break
        case 3:
            tarifa = 80
            break
        case 4:
            tarifa = 48
        default:
            tarifa = -1
    }

    sueldoFinal = diasTrabajo * tarifa

    imprimir(`Su tarifa diaria es: ${tarifa} <br>
    Dias trabajados: ${diasTrabajo} <br>
    Sueldo final: ${sueldoFinal}`)
 }

 /**
  * 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros 
  * positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero 
    esta comprendido entre los valores 50 y 700. Si cumple se cumple la 
    segunda condición, calcular la suma de los 4 números.
  */
 function ejercicio_20() {
    let listaNumeros = []
    let bandera = true
    let numero = 0
    let contaPares = 0
    let sumaTotal = 0
    let respuesta = ""
    let mayor = 0

    while (bandera) {
        numero = parseInt(prompt("Ingrese un numero entero positivo"))
        if (numero > 0) {
            listaNumeros.push(numero)
        }
        if (listaNumeros.length === 4) {
            bandera = false
        }
    }

    for (let indice in listaNumeros) {
        if (listaNumeros[indice] % 2 === 0) {
            contaPares++
        }
        if (listaNumeros[indice] > mayor) {
            mayor = listaNumeros[indice]
        }
        sumaTotal += listaNumeros[indice]
    }

    if (listaNumeros[2] % 2 === 0) {
        let cuadradoSegundo = Math.sqrt(listaNumeros[1])
        respuesta += respuesta + `<br>El cuadrado del segundo es: ${cuadradoSegundo}`
    }

    if (listaNumeros[0] < listaNumeros[3]) {
        let media = sumaTotal / listaNumeros.length
        respuesta += respuesta + `<br>La media es: ${media}`
    }

    if ((listaNumeros[1] > listaNumeros[2]) && (listaNumeros[2] >= 50 && listaNumeros[2] <= 700)) {
        respuesta += respuesta + `<br>La suma total es: ${sumaTotal}`
    }

    imprimir(`Lista numeros ${listaNumeros}
    <br>La cantidas de numeros pares ingresados es: ${contaPares}
    <br>El numero mayor es: ${mayor} ${respuesta}`)
 }

 /**
  * 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
  */
 function ejercicio_21() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero para hallar su factorial: "))
    let factorial = 1

    for (let i = 1; i <= numeroIngresado; i++) {
        factorial *= i
    }

    imprimir(`El facotorial de ${numeroIngresado} es: ${factorial}`)
 }

 /**
  * 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
  */
 function ejercicio_22() {
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de numeros a sumar: "))
    let sumaTotal = 0
    
    for (let i = 1; i <= cantidadNumeros; i++) {
        sumaTotal += i
    }

    imprimir(`La suma de los ${cantidadNumeros} primeros numero es: ${sumaTotal}`)
 }

 /**
  * 23. Hacer un algoritmo en JavaScript para calcular 
  * la suma de los números impares menores o iguales a n.
  */
 function ejercicio_23() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero entero positivo: "))
    let sumaImpares = 0

    for (let i = 1; i <= numeroIngresado; i++) {
        if (i % 2 !== 0) {
            sumaImpares += i
        }
    }

    imprimir(`La suma de los numero impares menores o iguales a ${numeroIngresado} es igual a: ${sumaImpares}`)
 }

 /**
  * 24. Hacer un algoritmo en JavaScript para realizar la suma de todos 
  * los números pares hasta el 1000.
  */
function ejercicio_24() {
    let sumaPares = 0
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sumaPares += i
        }
    }

    imprimir(`La suma de los numeros pares menores a 1000 es igual a : ${sumaPares}`)
}

/**
 * 25. Hacer un algoritmo en JavaScript para calcular el factorial de 
 * un número de una forma distinta.
 */
function ejercicio_25() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero para hallar su factorial: "))
    let factorial = 1

    for (let i = 1; i <= numeroIngresado; i++) {
        factorial *= i
    }

    imprimir(`El facotorial de ${numeroIngresado} es: ${factorial}`)
 }

 /**
  * 26. Hacer un algoritmo en JavaScript para calcular el resto y 
  * cociente por medio de restas sucesivas.
  */
function ejercicio_26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo: "))
    let divisor = parseInt(prompt("Ingrese el divisor: "))

    let cociente = 0
    let resto = 0

    while (resto + divisor <= dividendo) {
        resto += divisor
        cociente++
    }

    imprimir(`El resto y cociente de la division: ${dividendo} / ${divisor} es: 
    <br>Resto: ${resto}
    <br>Cociente: ${cociente}`)
}

/**
 * 27. Hacer un algoritmo en JavaScript para determinar la media 
 * de una lista indefinida de números positivos, se debe acabar el 
 * programa al ingresar un número negativo.
 */
function ejercicio_27() {
    let bandera = true
    let numero = 0
    let sumaTotal = 0
    let contaNumeros = 0
    let media = 0
    
    while (bandera) {
        numero = parseInt(prompt("Ingrese un numero (Para finalizar el ciclo ingrese un numero negativo): "))

        if (numero <= 0) {
            break
        }

        sumaTotal += numero
        contaNumeros++
    }

    media = sumaTotal / contaNumeros

    imprimir(`La media de los numero ingresado es ${media}`)
}

/**
 * 28. Hacer un algoritmo en JavaScript para calcular la suma 
 * de los primeros cien números con un ciclo repetir.
 */
function ejercicio_28() {
    let sumaTotal = 0
    let conta = 1
    do {
        sumaTotal += conta
        conta++
    } while(conta <= 100)

    imprimir(`La suma de los cien primeros numeros es: ${sumaTotal}`)
}

/**
 * 29. Hacer un algoritmo en JavaScript para calcular la suma 
 * de los primeros cien números con un ciclo mientras.
 */
function ejercicio_29() {
    let sumaTotal = 0
    let cont = 1

    while (cont <= 100) {
        sumaTotal += cont
        cont++
    }

    imprimir(`La suma de los cien primeros numero es: ${sumaTotal}`)
}

/**
 * 30. Hacer un algoritmo en JavaScript para calcular la suma 
 * de los primeros cien números con un ciclo para.
 */
function ejercicio_30() {
    let sumaTotal = 0

    for (let i = 1; i <= 100; i++) {
        sumaTotal += i
    }

    imprimir(`La suma de los cien primeros numeros es: ${sumaTotal}`)
}

/**
 * 31. Hacer un algoritmo en JavaScript parar calcular la media de 
 * los números pares e impares, sólo se ingresará diez números.
 */
function ejercicio_31() {
    let mediaPares = 0
    let contaPares = 0
    let totalPares = 0
    let mediaImpares = 0
    let contaImpares = 0
    let totalImpares = 0
    let numero = 0

    for (let i = 1; i <= 10; i++) {
        numero = parseInt(prompt("Ingrese un numero: "))
        if (numero % 2 === 0) {
            totalPares += numero
            contaPares++
        } else {
            totalImpares += numero
            contaImpares++
        }
    }

    mediaPares = totalPares / contaPares
    mediaImpares = totalImpares / contaImpares

    imprimir(`La suma total de los numeros pares es: ${totalPares} y su media es: ${mediaPares}
    <br>La suma total de los impares es: ${totalImpares} y su media es: ${mediaImpares}`)
}

/**
 * 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
 */
function ejercicio_33() {
    
    let respuesta = ''

    while (true) {
        respuesta = prompt("Desea continuar el programa? (S/N)").toLowerCase()

        if (respuesta === "n") {
            imprimir(`Programa finalizado :C`)
            break
        } 
    }
}

/**
 * 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar 
 * de los números del uno nueve.
 */
function ejercicio_34() {
    let respuesta = ""

    for (let i = 1; i <= 9; i++) {
        respuesta += `<br>***************<br>`
        for (let j = 0; j <= 10; j++) {
            respuesta += `${i} x ${j} = ${i*j}<br>`
        }
    }

    imprimir(respuesta)
}

/**
 * 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el 
 * número mayor y menor, se debe ingresar sólo veinte números.
 */
function ejercicio_35() {
    let numero = 0
    let numMayor = -9999
    let numMenor = 9999

    for (let i = 1; i <= 20; i++) {
        numero = parseInt(prompt("Ingrese un numero: "))

        if (numero > numMayor) {
            numMayor = numero
        }
        if (numero < numMenor) {
            numMenor = numero
        }
    }
    
    imprimir(`El numero mayor es: ${numMayor}
    <br>El numero menor es: ${numMenor}`)
}

/**
 * 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
 */
function ejercicio_36() {
    let numAnt = 0
    let numSig = 1
    let respuesta = ""
    suma = 0

    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de numeros a generar: "))

    for (let i = 1; i <= cantidadNumeros; i++) {
        suma = numAnt + numSig
        respuesta += `${suma}, `
        numAnt = numSig
        numSig = suma
    }

    imprimir(respuesta)
}

/**
 * 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D 
 * de un número por medio del algoritmo de Euclides.
 */
function ejercicio_37() {
    let primerNumero = parseInt(prompt("Ingrese el primer numero: "))
    let segundoNumero = parseInt(prompt("Ingrese el segundo numero: "))
    let resto = 0
    
    while (segundoNumero > 0) {
        resto = primerNumero % segundoNumero
        primerNumero = segundoNumero
        segundoNumero = resto
    }

    imprimir(`El M.C.D de los numeros es: ${primerNumero}`)
}

/**
 * 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
 */
function ejercicio_38() {
    let numerIngresado = parseInt(prompt("Ingrese el numero a verificar: "))
    let sumaDivisores = 0

    for (let i = 1; i < numerIngresado; i++) {
        if (numerIngresado % i === 0) {
            sumaDivisores += i
        }
    }

    if (sumaDivisores === numerIngresado) {
        imprimir(`El numero ${numerIngresado} es perfecto`)
    } else {
        imprimir(`El numero ${numerIngresado} NO es perfecto`)
    }
    console.log(sumaDivisores)
}

/***
 * 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación 
 * del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
 */
    function ejercicio_39() {
        let numerIteraciones = parseInt(prompt(`Ingrese el nuero de iteraciones: `))
        let aproxPI = 0
    
        for (let i = 1; i <= numerIteraciones; i++) {
            if (i % 2 === 0) {
                aproxPI += 4 / (i + 2)
            }
            else {
                aproxPI -= 4 / (i + 2)
            }
        }
    
        aproxPI += 4
    
        imprimir(`El valor aproximando de PI es: ${aproxPI}`)
    }

/**
 * 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la 
 * serie de Nilakantha. La formula que se debe aplicar es:
 * Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
 */
function ejercicio_40() {
    let numeroIteraciones = parseInt(prompt("Ingrese el numero de iteraciones: "))
    let aproxPI = 0

    for (let i = 1; i <= numeroIteraciones; i++) {
        if (i % 2 === 0) {
            aproxPI -= 4 / ((i + 1) * (i + 2) * (i + 3))
        } else {
            aproxPI += 4 / ((i + 1) * (i + 2) * (i + 3))
        }
    }

    aproxPI += 3

    imprimir(`La aproximancion a PI es: ${aproxPI}`)
}