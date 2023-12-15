function ejercicio01(){
    //Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero >= 100 && numero <= 999){
        alert("Este numero tiene 3 digitos")
    }
    else{
        alert("Este numero no tiene 3 digitos")
    }
}

function ejercicio02(){
    //Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero < 0){
        alert("Este numero es negativo")
    }
    else{
        alert("Este numero es positivo")
    }
}

function ejercicio03(){
    //Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let numero = parseInt(prompt("Escribe un numero"))
    divisible = 10
	numero = (numero%divisible)
	if(numero == 4){
        alert("Este numero termina en 4")
    }
    else{
        alert("Este numero no termina en 4")
    }
}

function ejercicio04(){
    //Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor. (Pendiente)
    let numero1 = parseInt(prompt("Escribe un numero"))
    let numero2 = parseInt(prompt("Escribe un numero"))
    let numero3 = parseInt(prompt("Escribe un numero"))

    let array = []
    array.push(numero1)
    array.push(numero2)
    array.push(numero3)

    for (let i = 0; i < (array.length-1); i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i] > array[j]){
                let n = array[i] 
                array[i] = array[j]
                array[j] = n
                i = 0
                j = i + 1
            }
        }
    }
    alert("de menor a mayor: "+ array[0] + ", " + array[1] + ", "+array[2])
}

function ejercicio05(){
    //Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
    //esta dependerá del número de zapatos que se compren. Si son más de diez,
    // se les dará un 10% de descuento sobre el total de la compra; 
    //si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
    // y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

    let precio = 80
    let descuento = 0
    let total_compra = 0
    let descontar = 0
    let numero = parseInt(prompt("Ingrese cantidad de zapados que desea comprar"))
	if(numero > 10 && numero < 20){
        descuento = 10
        total_compra = precio*numero
        descontar = Math.ceil((total_compra)*(descuento/100))
        alert("Para un total de "+numero+" zapatos y con descuento del "+descuento+"% sale: "+(total_compra-descontar))
    }
    else if(numero > 20 && numero <30){
        descuento = 20
		total_compra = precio*numero
		descontar = Math.ceil((total_compra)*(descuento/100))
        alert("Para un total de "+numero+" zapatos y con descuento del "+descuento+"% sale: "+(total_compra-descontar))
    }
    else if(numero > 30){
        descuento = 40
		total_compra = precio*numero
		descontar = Math.ceil((total_compra)*(descuento/100))
        alert("Para un total de "+numero+" zapatos y con descuento del "+descuento+"% sale: "+(total_compra-descontar))
    }else{
        descuento = 0
		total_compra = precio*numero
		descontar = Math.ceil((total_compra)*(descuento/100))
        alert("Para un total de "+numero+" zapatos y con descuento del "+descuento+"% sale: "+(total_compra-descontar))
    }
}

function ejercicio06(){
    //Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
    //se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
    //pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
    let numero = parseInt(prompt("Ingrese cantidad de horas de trabajo en la semana"))
    let pago = 0
	if(numero <= 40){
        pago = 20
		let total = pago*numero
        alert("Para un total de "+numero+" horas trabajados usted recibira un pago total de "+total+" $")
    }else{
        pago = 25
		let total = pago*numero
        alert("Para un total de "+numero+" horas trabajados usted recibira un pago total de "+total+" $")
    }
}

function ejercicio07(){
    //Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes 
    //con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
    //Los descuentos son los siguientes:
    //Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento



    let letra = prompt("Ingrese el tipo de membresia:")
    let descuento = 0
    if(letra == "A" || letra == "a"){
        descuento = 10
        alert("Usted obtiene un descuento de "+descuento+"% de sus compras")
    }else if(letra == "B" || letra == "b"){
        descuento = 15
        alert("Usted obtiene un descuento de "+descuento+"% de sus compras")
    }else if(letra == "C" || letra == "c"){
        descuento = 20
        alert("Usted obtiene un descuento de "+descuento+"% de sus compras")
    }else{
        alert("Usted no tienen ninguna membresia")
    }
}

function ejercicio08(){
    //Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
    let nota1 = parseInt(prompt("Ingrese nota 1"))
    let nota2 = parseInt(prompt("Ingrese nota 2"))
    let nota3 = parseInt(prompt("Ingrese nota 3"))
	
	let nota_minima = 13
	
	let promedio = (nota1+nota2+nota3)/3
	
    if(promedio < nota_minima){
        alert("El alumno desaprobo con una nota de "+promedio)
    }else{
        alert("El alumno aprobo con una nota de "+promedio)
    }
}

function ejercicio09(){
    //Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador,
    // se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
    //si generaba menos de $2000 su aumento será de un 10%.
    let numero = parseInt(prompt("Ingrese cuanto gana: "))
    let aumento = 0
    if(numero <= 2000){
        aumento = 10
		sumar = ((numero)*(aumento/100))
        alert("Usted tendra un aumento del "+aumento+"% y en total seria: "+(numero+sumar))
    }else{
        aumento = 5
		sumar = ((numero)*(aumento/100))
        alert("Usted tendra un aumento del "+aumento+"% y en total seria: "+(numero+sumar))
    }
}

function ejercicio10(){
    //Hacer un algoritmo en JavaScript que diga si un número es par o impar.

    let numero = parseInt(prompt("Ingrese numero: "))

	if(numero % 2 == 0 ){
        alert("El numero es par")
    }else{
        alert("El numero es impar")
    }
}

function ejercicio11(){
    //Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

	let numero1 = parseInt(prompt("Ingrese numero: "))
    let numero2 = parseInt(prompt("Ingrese numero: "))
    let numero3 = parseInt(prompt("Ingrese numero: "))
	
	let array = []
	array.push(numero1)
	array.push(numero2)
	array.push(numero3)
	
    for (let i = 0; i < (array.length-1); i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i] > array[j]){
                let n = array[i] 
                array[i] = array[j]
                array[j] = n
                i = 0
                j = i + 1
            }
        }
    }
    alert("El numero mayor es: "+array[(array.length-1)])
}

function ejercicio12(){
    //Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

    let numero1 = parseInt(prompt("Ingrese numero: "))
    let numero2 = parseInt(prompt("Ingrese numero: "))
	
	let array = []
	array.push(numero1)
	array.push(numero2)
	
    for (let i = 0; i < (array.length-1); i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i] > array[j]){
                let n = array[i] 
                array[i] = array[j]
                array[j] = n
                i = 0
                j = i + 1
            }
        }
    }
    alert("El numero mayor es: "+array[(array.length-1)])
}


function ejercicio13(){
    //Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

	let bandera = false

    let letra = prompt("Ingrese una letra: ")
	
	let array = []
	array.push("a")
    array.push("e")
    array.push("i")
    array.push("o")
    array.push("u")
    array.push("A")
    array.push("E")
    array.push("I")
    array.push("O")
    array.push("U")

    for (let index = 0; index < array.length; index++) {
        if(array[index] == letra){
            bandera = true
            alert("La letra ingresada es una vocal")
            break
        }
    }

    if(!bandera){
        alert("La letra ingresada no es una vocal")
    }

}

function ejercicio14(){
    //Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo. (Pendiente)
    let numero = parseInt(prompt("Ingrese un numero del 1 a 9: "))

	if(numero > 0 && numero < 10){
        let contador = 1
		let residuo = 0;
        while (contador <= numero) {
            if(numero%contador == 0){
                residuo = residuo + 1
            }
            contador = contador + 1
        }
        if(residuo == 2 ){
            alert("El numero ingresado es un numero primo")
        }else{
            alert("El numero ingresado no es un numero primo")
        }
    }else{
        alert("El numero ingresado no esta dentro del rango de 1 a 9")
    }

}
function ejercicio15(){
    //Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    let numero = parseInt(prompt("Ingrese un numero: "))
	
	let constante_1_cm = 0.39370
	let constante_1_libra = 0.453592
    alert("El "+numero+" cm es equivalente a "+(numero*constante_1_cm)+" pulgadas")
    alert("El "+numero+" libras es equivalente a "+(numero*constante_1_libra)+" kilogramos")

}

function ejercicio16(){
    //Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
    let numero = parseInt(prompt("Ingrese un numero: "))
	
	let arreglo = []
    arreglo.push("Lunes")
	arreglo.push("Martes")
	arreglo.push("Miercoles")
	arreglo.push("Jueves")
	arreglo.push("Viernes")
	arreglo.push("Sabado")
	arreglo.push("Domingo")
	
    if(numero < 8){
        alert(arreglo[(numero-1)])
    }else if(numero % 7 == 0){
        alert(arreglo[6])
    }else{
        alert(arreglo[(numero % 7)-1])
    }

}

function ejercicio17(){
    //Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo. (17 PENDIENTE)
    let hora = parseInt(prompt("Ingrese hora: "))
    let minuto = parseInt(prompt("Ingrese minutos "))
    let segundos = parseInt(prompt("Ingrese segundos: "))
	
	let nuevo_segundo = (hora*3600)+(minuto*60)+segundos+1
	let nueva_hora = Math.ceil(nuevo_segundo/3600)
	let num = nuevo_segundo % 3600
	let nuevo_minuto = Math.ceil(num/60)
	let num_segundos = num % 60
	
    alert("El numero de horas "+ nueva_hora + ":"+nuevo_minuto+ ":"+num_segundos)
}

function ejercicio18(){
    //Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
    //Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. 
    //Los precios son:

    //$10. Si se compran unidades separadas hasta 9.

    //$8. Si se compran entre 10 unidades hasta 99.

    //$7. Entre 100 y 499 unidades.

    //$6. Para mas de 500 unidades.

    //La ganancia para el vendedor es de 8,25 % de la venta. 
    //Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente 
    //y la ganancia para el vendedor.

    let numero = parseInt(prompt("Ingrese canmtidad de disco que desea comprar: "))
	let porcentaje = 8.25

    if(numero <= 9){
        let costo = 10
		let total = numero*costo
		let ganancia = total*(porcentaje/100)
        alert( "El total vendido es "+total+ " y la ganancia es "+ ganancia)
    }else if(numero >= 10 && numero <= 99){
        let costo = 8
        let total = numero*costo
        let ganancia = total*(porcentaje/100)
        alert( "El total vendido es "+total+ " y la ganancia es "+ ganancia)
    }else if(numero >= 100 && numero <=499){
        let costo = 7
        let total = numero*costo
        let ganancia = total*(porcentaje/100)
        alert( "El total vendido es "+total+ " y la ganancia es "+ ganancia)
    }else if(numero >= 500){
        let costo = 6
        let total = numero*costo
        let ganancia = total*(porcentaje/100)
        alert( "El total vendido es "+total+ " y la ganancia es "+ ganancia)
    }
}

function ejercicio19(){
    //Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
    //con su número identificador y salario diario correspondiente:

    //Cajero (56$/día).

    //Servidor (64$/día).

    //Preparador de mezclas (80$/día).

    //Mantenimiento (48$/día).

    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros 
    //que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
    //Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

    let numero = parseInt(prompt("Ingrese el tipo de empleado que es (1 al 4):"))
    let dias = parseInt(prompt("la cantidad de días que trabajó en la semana (6 días máximos):"))
	
    if(dias > 6){
        alert("la cantidad de días  que trabajó en la semana sobrepasa los 6 dias ")
    }else if(numero > 4){
        alert("El identificador es incorrecto")
    }else if(numero == 1){
        let tipo = "cajero"
        let salario = 56
        let ganancia = salario*(dias)
        alert("Usted es "+tipo+ " y la ganancia es "+ (ganancia))
    }else if(numero == 2){
        let tipo = "servidor"
        let salario = 64
        let ganancia = salario*(dias)
        alert("Usted es "+tipo+ " y la ganancia es "+ (ganancia))
    }else if(numero == 3){
        let tipo = "Preparador de mezclas"
        let salario = 80
        let ganancia = salario*(dias)
        alert("Usted es "+tipo+ " y la ganancia es "+ (ganancia))
    }else if(numero == 4){
        let tipo = "mantenimiento"
        let salario = 48
        let ganancia = salario*(dias)
        alert("Usted es "+tipo+ " y la ganancia es "+ (ganancia))
    }

}

function ejercicio20(){
    //Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    //¿Cuántos números son Pares?

    //¿Cuál es el mayor de todos?

    //Si el tercero es par, calcular el cuadrado del segundo.

    //Si el primero es menor que el cuarto, calcular la media de los 4 números.

    //Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
    //Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
    let total = 4
	let arreglo = []
	let arreglo2 = []
	let bandera = true
	let contador = 0

    while (bandera) {
        if(contador == total){
            bandera = false
        }else{
            let numero = parseInt(prompt("Ingrese número enteros positivos "))
            if(numero < 0){
                alert("solo ingrese número enteros positivos")
            }else{
                contador = contador + 1
				arreglo.push(numero)
				arreglo2.push(numero)
            }
        }
    }

	//ordenar de menor a mayor

    for (let i = 0; i < (arreglo.length-1); i++) {
        for (let j = i; j < arreglo.length; j++) {
            if(arreglo[i] > arreglo[j]){
                let n = arreglo[i] 
                arreglo[i] = arreglo[j]
                arreglo[j] = n
                i = 0
                j = i + 1
            }
        }
    }

	let cant_pares = 0

    for (let index = 0; index < arreglo.length; index++) {
        if(arreglo[index] % 2 == 0 ){
            cant_pares = cant_pares + 1
        }
    }

    alert( "Hay "+cant_pares+" numeros pares " + "El numero mayor es  "+arreglo[(arreglo.length)-1])

    if(arreglo2[2]%2 == 0){
        alert("El tercer numero es par, por lo tanto el cuadrado del segundo numero es "+(arreglo2[1]*arreglo2[1]))
    }
	
	if(arreglo2[0]  < arreglo2[3]){
        alert("La media de los 4 números es "+((arreglo2[0]+arreglo2[1]+arreglo2[2]+arreglo2[3])/4))
    }
    if(arreglo2[1]  > arreglo2[2]){
        if(arreglo2[2] >= 50 && arreglo2[2] <= 700){
            alert("La suma de todos los numeros es "+(arreglo2[1]+arreglo2[2]+arreglo2[3]+arreglo2[0]))
        }
    }
}

function ejercicio21(){
    //Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
    let numero = parseInt(prompt("Ingrese un numero: "))

	let factorial = 1

    for (let index = 1; index < (numero); index++) {
        factorial = (index+1)*factorial
        
    }
    alert("El factorial de "+numero+ " es "+factorial)

}

function ejercicio22(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
    let numero = parseInt(prompt("Ingrese un numero: "))

	let num = 0;
	let suma = 0;

    while (num <= numero) {
        suma = suma + num
		num = num + 1
    }

    alert(suma)

}
function ejercicio23(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

    let numero = parseInt(prompt("Ingrese un numero: "))

	let num = 0;
	let suma = 0;

    while (num <= numero) {
        if( num%2 != 0){
            suma = suma + num
        }
        num = num + 1
    }
    alert(suma)
}

function ejercicio24(){
    //Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

    let numero = 1000
	let num = 0;
	let suma = 0;

    while (num <= numero) {
        if( num%2 == 0){
            suma = suma + num
        }
        num = num + 1
    }
    alert(suma)
}


function ejercicio25(){
    //Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
    
    let  factorial = 0
    let numero = parseInt(prompt("Ingrese un numero: "))
	
    if(numero < 0 ){
        alert("El factorial no permite numeros negativos")
    }else{
        factorial = 1
        while (numero > 0) {
            factorial = factorial * numero
            numero = numero - 1
        }
        alert("El factorial es: "+ factorial)
    }
}


function ejercicio26(){
    //Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

    let cociente = 0
    let resto = 0

    let dividendo = parseInt(prompt("Ingrese el dividendo:" ))
    let divisor = parseInt(prompt("Ingrese el divisor:"  ))
	
    if(divisor == 0){
        alert("Error: No se puede dividir por cero.")
    }else{
        cociente = 0
        resto = dividendo

        while (resto >= divisor) {
            resto = resto - divisor
            cociente = cociente + 1
        }

        alert( "Cociente:"+cociente)
        alert("Resto:"+ resto)
    }

}

function ejercicio27(){
    //Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos,
    // se debe acabar el programa al ingresar un número negativo.

    let bandera = true
	let contador = 0
	let promedio = 0
    while (bandera) {
        let numero = parseInt(prompt("ingrese numero"  ))
        if(numero < 0){
            bandera = false
            alert("la media es : "+ (promedio/contador))
        }else{
            contador = contador + 1
			promedio = (promedio+numero)
        }
    }

}

function ejercicio28(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

    let numero = 100
	let num = 0;
	let suma = 0;
	let bandera = true
	
    do {
        if(num<= numero){
            suma = suma + num
			num = num + 1
        }else{
            bandera = false
        }
    } while (bandera);
    
    alert(suma)

}

function ejercicio29(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.\\
    let numero = 100
	let num = 0;
	let suma = 0;
    while (num <= numero) {
        suma = suma + num
		num = num + 1
    }

    alert(suma)
}

function ejercicio30(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

    let numero = 100
	let suma = 0;
	
    for (let index = 1; index <= numero; index++) {
        suma = suma + index
    }
    alert(suma)
}

function ejercicio31(){
    //Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

	let total = 10
	let arreglo = []
	
    for (let index = 0; index < total; index++) {
        let numero = parseInt(prompt("ingrese numero"  ))
        arreglo.push(numero)
    }
	
	let media_par = 0
	let cant_par = 0
	let media_impar = 0
	let cant_impar = 0

    for (let index = 0; index < arreglo.length; index++) {
        if(arreglo[index] % 2 == 0){
            cant_par = cant_par + 1
			media_par = media_par + arreglo[index]
        }else{
            cant_impar = cant_impar + 1
			media_impar = media_impar + arreglo[index]
        }
    }
	 
	alert("La media par es " + (media_par/cant_par))
    alert("La media impar es " + (media_impar/cant_impar))
}

function ejercicio32(){
    //Se quiere saber cuál es la ciudad con la población de más personas, 
    //son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

    alert("No se entiende ")
}

function ejercicio33(){
    //Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

	let numero = parseInt(prompt("hola, para seguir presione el numero 2"))

    while (numero != 2) {
        numero = parseInt(prompt("Ingresar el numero 2! ahhhhhhh, por favor:"))
    }
    alert("Al fin, puede continuar con el proceso ....")
}

function ejercicio34(){
    //Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

    let numero = 9
    let string = ""
    for (let index = 1; index <= numero; index++) {
        string += (numero+" x "+ index+ " = "+ index*numero)+" / "
    }

    alert(string)
}

function ejercicio35(){
    //Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, 
    //se debe ingresar sólo veinte números.

    let total = 20
	let arreglo = []
	
    for (let index = 0; index < total; index++) {
        let numero = parseInt(prompt("ingrese numero"  ))
        arreglo.push(numero)
    }

	//ordenar de menor a mayor
    for (let i = 0; i < (arreglo.length-1); i++) {
        for (let j = i; j < arreglo.length; j++) {
            if(arreglo[i] > arreglo[j]){
                let n = arreglo[i] 
                arreglo[i] = arreglo[j]
                arreglo[j] = n
                i = 0
                j = i + 1
            }
        }
    }
	
    alert("el menor es: " + arreglo[0])
    alert("el mayor es: " + arreglo[arreglo.length-1])
}

function ejercicio36(){
    //Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

    let numero = parseInt(prompt("ingrese numero"  ))
	
	let a = 0
	let b = 1
	
    for (let index = 1; index <= numero; index++) {
        alert(a)
        let c = a + b
		a = b
		b = c
    }

}

function ejercicio37(){
    //Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
    let resto = 0
    let mcd = 0
	let num1 = parseInt(prompt("Ingrese el primer numero"  ))
	let num2 = parseInt(prompt("Ingrese el segundo numero"  ))

	while (num2 != 0) {
        resto = num1 % num2
        num1 = num2
        num2 = resto
    }
    
    
    mcd = num1
	
    alert( "El M.C.D de "+ num1+ " y "+ num2+ " es: "+ mcd)

}

function ejercicio38(){
    //Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

    let numero = parseInt(prompt("ingrese numero"  ))
    let suma = 1;
	
    for (let index = 2; index < numero; index++) {
        if(numero % index == 0){
            suma = suma + index;
        }
    }
    if(suma == numero){
        alert("El número "+ numero+ " sí es perfecto")
    }else{
        alert("El número "+ numero+ " no es perfecto")
    }

}

function ejercicio39(){
    //Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
    //La formula que se debe aplicar es:
    //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

	let constante = 4
	let divisor = 1
	let numero = parseInt(prompt("ingrese numero"  ))
	let num_pi = 0

	for (let index = 1; index <= numero; index++) {
        alert("pi = "+constante+ "/"+divisor)
        if( index % 2 != 0 ){
            num_pi = num_pi + (constante/(divisor));
        }else{
            num_pi = num_pi - (constante/(divisor));
        }
        divisor = divisor+2
    }
    alert("el resultado es: "+num_pi)
}

function ejercicio40(){
    //Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. 
    //La formula que se debe aplicar es:
    //Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...

    
	let constante = 4
	let divisor = 2
	let numero = parseInt(prompt("ingrese numero"  ))

	let num_pi = 3
	let divisor_inicial = 2

    for (let index = 1; index <= numero; index++) {
        divisor = divisor_inicial*(divisor_inicial+1)*(divisor_inicial+2)
        alert("pi = "+constante+ "/"+divisor)

        if( index % 2 != 0 ){
            num_pi = num_pi + (constante/(divisor));
        }else{
            num_pi = num_pi - (constante/(divisor));
        }
        divisor_inicial = divisor_inicial + 2
    }

    alert("el resultado es: "+num_pi)

}
