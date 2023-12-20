function ejercicio26() {
    var divisor = 0;
	var dividendo = 0;
	var acum = 0;
	while (dividendo<=0) {
		dividendo = parseInt(prompt("Ingrese el dividendo(D): "));
		if (dividendo>0) {
			while (divisor<=0 || divisor>dividendo) {
				divisor = parseInt(prompt("Ingrese el divisor(d): "));
			}
		}
	}
	// 15:4 -> 15-4=11 , 11-4=7 , 7-4=3 , 3-4=-1
	// 15:5 -> 15-5=10 , 10-5=5 , 5-5=0
	while (dividendo>=divisor) {
		dividendo = dividendo-divisor;
		acum = acum+1;
	}
	alert(`El cociente es: ${acum} y el resto es: ${dividendo}`);
}