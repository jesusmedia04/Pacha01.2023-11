<<<<<<< HEAD
SubProceso validacion <- verificarEdad ( AnioNacimiento )
	AnioActual = 2023
	
	edad = AnioActual - AnioNacimiento
	
	si edad >= 18 Entonces
		validacion = Verdadero
	SiNo
		validacion = falso
	FinSi
Fin SubProceso

Proceso Arreglos
	
	bandera = Verdadero
	valorNumero = 0
	
	Mientras bandera Hacer
		valorNumero = valorNumero + 1
		Escribir valorNumero
		Si valorNumero == 50
			bandera = Falso
		FinSi
	FinMientras
	
	bandera2 = Verdadero
	Repetir
		valorNumero = valorNumero - 1
		Escribir  valorNumero
		si valorNumero = 0 Entonces
			bandera2 = Falso
		FinSi
	Hasta Que  bandera2 = Falso
	
	
	Para  inicio<-0 hasta 10 Con Paso 1 Hacer
		Escribir  inicio
	FinPara
	
	Escribir  "Tu año de nacimineto es "
	Leer anio
	
	verificacion = verificarEdad(anio)
	si verificacion Entonces
		Escribir "Eres mayor de edad"
	SiNo
		Escribir  "No eres mayor de edad"
=======

Proceso Arreglos 
	
	Dimensionar dia[7]
	
	dia[1]<- "Lunes"
	dia[2]<- "Martes"
	dia[3]<- "Miercoles"
	dia[4]<- "Jueves"
	dia[5]<- "Viernes"
	dia[6]<- "Sabado"
	dia[7]<- "Domingo"
	

	escribir "Favor ingresar el numero del dia de anio"
	leer numdia
	
	si numdia > 0 y numdia < 366 Entonces
		escribir numdia
		si numdia <= 7 Entonces
			Escribir dia[numdia]
		SiNo

		FinSi
	SiNo
		escribir "Escriba un numero entre 1 y 365"
		
>>>>>>> fuentes/main
	FinSi
FinProceso
