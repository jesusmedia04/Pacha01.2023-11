Algoritmo  ejemplo39
	Escribir "Ingrese la cantidad de terminos: "
	Leer n
	para i <- 0 hasta n - 1 Con Paso 1 hacer
		terminoActual <- 4 / (1 + 2 * i)
		si i % 2 = 0 Entonces
			piAprox <- piAprox + terminoActual
		SiNo
			piAprox <-piAprox - terminoActual
		FinSi
	FinPara
	
	Escribir "La aproximacion de pi con" , n, " es: ", piAprox
	
FinAlgoritmo

