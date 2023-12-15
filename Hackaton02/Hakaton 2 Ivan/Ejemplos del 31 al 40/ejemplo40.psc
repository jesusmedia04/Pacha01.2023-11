Proceso ejemplo40
	Escribir "Ingrese la cantidad de terminos: "
	Leer n
	
	piAprox <- 3.0
	denominador <- 2.0
	para i <- 0 hasta n Con Paso 1 hacer
		si i % 2 = 0 Entonces
			piAprox <- piAprox - 4 / (denominador * (denominador + 1) * (denominador + 2))
		SiNo
			piAprox <-piAprox + 4 / (denominador * (denominador + 1) * (denominador + 2))
		FinSi
		
		denominador <- denominador + 2
	FinPara
	
	Escribir "La aproximacion de pi con" , n, " es: ", piAprox
FinProceso
