function ejercicio31(){
    let n = new Number();
	let count = new Number();
	let countpares = new Number();
	let countimpares = new Number();
	let sumapares = new Number();
	let sumaimpares = new Number();
	count = 0;
	countpares = 0;
	countimpares = 0;
	while (count<10) {
		n = parseInt(prompt(`Ingrese el N°${count+1}:`));
		if (n>0) {
			count = count+1;
			if (n%2==0) {
				countpares = countpares+1;
				sumapares = sumapares+n;
			} else {
				countimpares = countimpares+1;
				sumaimpares = sumaimpares+n;
			}
		}
	}
	if (countpares>0) {
		alert(`La media de los números pares ingresados es: ${sumapares/countpares}`);
	}
	if (countimpares>0) {
		alert(`La media de los números impares ingresados es: ${sumaimpares/countimpares}`);
	}
}