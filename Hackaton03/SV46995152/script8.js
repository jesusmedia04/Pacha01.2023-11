/* Hacer un algoritmo en JavaScript para calcular el
 promedio de tres notas y determinar si el estudiante aprobó o no.*/ 

 function ejercicio08(){
    let nota1 = parseInt(prompt( 'ingrese la primera nota'));
    let nota2 = parseInt(prompt( 'ingrese la segunda nota'));
    let nota3 = parseInt(prompt( 'ingrese la tercera nota'));

    const promedio = (nota1 + nota2 + nota3)/3;
    if ( promedio >= 11 ){
        alert('el estudiante aprobo con un promedio de: ' + promedio );
    }else{
        alert('el estudiante desaprobo con un promedio de: ' + promedio);
    }
 }