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

function maximo(a, b, c) {
  const numeros = [a, b, c];
  let max = numeros[0];
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  return max;
}

//EJERCICIO 4

let contraseñaValida = false;
function validarPassword(contraseñaValida){
if (password.length >= 8 && /\d/.test(contraseñaValida))
{
contraseñaValida = true
console.log(validarPassword(contraseñaValida));
};
}

//EJERCICIO 5

function sumarArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

//EJERCICIO 6

function mayorNumero(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

//EJERCICIO 7

function obtenerPares(numeros){
  let pares =  [];
  for (let i = 0; i < numeros.length; i++){
    if (numeros [i] % 2 === 0) {
      pares.push(arr[i]);
    }
  }
  return pares;
}

//EJERCICIO 8
const usuario = {nombre: "Ana", edad: 20, activo: false}
function devolverUsuario(usuario)
{
  return usuario.nombre + " tiene " + usuario.edad + " años";
}
console.log(descripcionUsuario(usuario)); 

//EJERCICIO 9

function activarUsuario(usuario){
usuario.activo = true;
return usuario;
}

//EJERCICIO 10
 function calcularPrecio(productos)
 {
  let precioTotal = 0;
  for (let i = 0; i < productos.length; i++) {
    precioTotal += productos[i].precio;
  }
  return precioTotal;
 }

 //EJERCICIO 11

 function sacarNombres(usuarios) {
  let nombres = [];
  for (let i = 0; i < usuarios.length; i++) {
    nombres.push(usuarios[i].nombre);
  }
  return nombres;
}
console.log(sacarNombres(usuarios));

//EJERCICIO 12

function sacarNombresMayores(usuarios) {
  let nombres = [];
  for (let i = 0; i < usuarios.length; i++) 
    if (usuarios[i].edad >= 18)
  {
    nombres.push(usuarios[i].nombre);
  }
  return nombres;
}
console.log(sacarNombres(usuarios));

//EJERCICIO 13

function sumaEdades(usuarios) {
  let sumaTotal = 0;
  for (let i = 0; i < usuarios.length; i++) {
    sumaTotal += usuarios[i].edad;
  }
  return sumaTotal;
}





 
 