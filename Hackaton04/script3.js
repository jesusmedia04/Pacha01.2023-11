/* Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
 Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */

 function  sumOfCubes(n1,n2,n3){
    //  let n1 = parseInt(prompt('ingrese primer numero')); 
    //  let n2 = parseInt(prompt('ingrese segundo numero'));
    // let n3 = parseInt(prompt('ingrese tercer numero'));
    
    const resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
    return console.log('resultado: ', resultado)

 }