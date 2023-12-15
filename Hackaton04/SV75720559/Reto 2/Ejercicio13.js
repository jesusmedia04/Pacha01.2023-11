function objectToArray(objeto) {
    return Object.entries(objeto);
}

const resultado = objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
});
alert(resultado); 
