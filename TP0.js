//EJERCICIO 1
let nombre = "alejo";
function formatearNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

//EJERCICIO 2

var resultado = contarLetras("hola mundo");
console.log(resultado); 

function contarLetras(texto) {
  return texto.replace(/\s/g, '').length;
}

// EJERCICIO 3

