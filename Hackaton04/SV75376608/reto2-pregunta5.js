//Crear una función que reciba un array de valores y filtre los valores que no son string
function filtroSring(...valores){
    let noStringFiltro = []
    valores.forEach(element => {
        if(typeof(element) != "string"){
            noStringFiltro.push(element)
        }
    });

    return noStringFiltro
}

console.log(filtroSring(2,4,8,true,"Hola","Como estas",3,7,"Si"))