/*Utilizando función arrow, crear una función que reciba como parámetros un 
nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre
es sebastián yabiku y mi edad 33” */

 function generarSaludo(){

    const generarSaludo = (nombre, apellido, edad) => {
        return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
    };
    
    console.log(generarSaludo("Sebastián", "Yabiku", 33))  
    
 }
