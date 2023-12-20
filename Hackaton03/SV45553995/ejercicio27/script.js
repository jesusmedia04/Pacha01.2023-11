function ejercicio27() {
    let n = 0;
	let contador =0;
	let suma = 0;
	n = 1;
	while (n>0) {
		n = parseInt(prompt(`suma actual: "${suma}" \n El programa termina cuando se ingresa un Cero o negativo\nIngrese el N°${contador+1}`));
		if (n>0) {
			suma = suma+n;
			contador = contador+1;
		}
	}
	alert(`La media de los números ingresados es: ${suma/contador}`);
}