function findLargestNums(matriz) {
    return matriz.map(subArray => Math.max(...subArray));
}

const resultado = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
alert(resultado); 
