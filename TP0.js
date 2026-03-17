//EJERCICIO 1
function formatearNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}
console.log(formatearNombre("JUAN"));   
console.log(formatearNombre("mARIA"));  

//EJERCICIO 2
function contarLetras(texto) {
  return texto.replace(/\s/g, '').length;
}
console.log(contarLetras("hola mundo"));

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
console.log(maximo(10, 5, 8));

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

function sumarArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}
console.log(sumarArray([1, 2, 3, 4]));

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
console.log(mayorNumero([3, 9, 2, 15]));

//EJERCICIO 7

function obtenerPares(numeros){
  let pares =  [];
  for (let i = 0; i < numeros.length; i++){
    if (numeros [i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}
console.log(obtenerPares([1,2,3,4,5,6,7,8,9,10]));

//EJERCICIO 8
const usuario = {nombre: "Ana", edad: 20, activo: false}
function devolverUsuario(usuario)
{
  return usuario.nombre + " tiene " + usuario.edad + " años de edad.";
}
console.log(devolverUsuario(usuario)); 

//EJERCICIO 9

function activarUsuario(usuario){
usuario.activo = true;
return usuario;
}
console.log(activarUsuario(usuario));


//EJERCICIO 10
 function calcularPrecio(productos)
 {
  let precioTotal = 0;
  for (let i = 0; i < productos.length; i++) {
    precioTotal += productos[i].precio;
  }
  return precioTotal;
 }
 const productosLista = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}
]

console.log(calcularPrecio(productosLista))

 //EJERCICIO 11

 function sacarNombres(usuarios) {
  let nombres = [];
  for (let i = 0; i < usuarios.length; i++) {
    nombres.push(usuarios[i].nombre);
  }
  return nombres;
}
const usu = [
  {nombre: "Ana"},
  {nombre: "Juan"}
];
console.log(sacarNombres(usu));

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
const usu2 = [
  {nombre: "Ana", edad: 20},
  {nombre: "Juan", edad: 15} 
];
console.log(sacarNombresMayores(usu2));

//EJERCICIO 13

function sumaEdades(usuarios) {
  let sumaTotal = 0;
  for (let i = 0; i < usuarios.length; i++) {
    sumaTotal += usuarios[i].edad;
  }
  return sumaTotal;
}
console.log(sumaEdades(usu2));

//EJERCICIO 14

const producto = {
  nombree: "Notebook",
  precio: 1000
};

const {nombree, precio} = producto;

console.log(nombree, "$", precio);  

//EJERCICIO 15

const productos ={
  nom: "notebook",
  pre: 1000
};

const Stock = 
{
  ...productos, stock: 5
};

console.log(Stock);

//EJERCICIO 16

function buscarProducto(prod, nombre) {
  return prod.find(producto => producto.nombre === nombre);
}

const prod = [
  { nombre: "Notebook", precio: 1000 },
  { nombre: "Tablet", precio: 500 },
  { nombre: "Celular", precio: 700 }
];


console.log(buscarProducto(prod, "Tablet"))


//EJERCICIO 17


function buscarProducto(produ) {
  return produ.filter(produ => produ.precio > 50);
}

const produ = [
  { nombre: "Notebook", precio: 1000 },
  { nombre: "Tablet", precio: 500 },
  { nombre: "Celular", precio: 40 },
  { nombre: "Cargador", precio: 30 }
];

const res = buscarProducto(produ);
console.log(res);

//EJERCICIO 18

function promedio(numeros) {
  const suma = numeros.reduce((qsy, num) => qsy + num, 0);
  return suma / numeros.length;
}

const nums = [10, 8, 6, 9];
const resultado2 = promedio(nums);
console.log(resultado2); 



//DESAFÍO FINAL - SIMULACIÓN DE API

const usuarios = [
  { id: 1, nombre: "Ana", edad: 20 },
  { id: 2, nombre: "Juan", edad: 15 },
  { id: 3, nombre: "Pedro", edad: 30 }
];

function obtenerUsuarios() {
  return usuarios;
}

const todos = obtenerUsuarios();
console.log(todos);

//obtenerUsuarioPorId(id)

function obtenerUsuarioPorId(id) {
  return usuarios.find(usuario => usuario.id === id);
}

const usuario2 = obtenerUsuarioPorId(2);
console.log(usuario2);

//obtenerMayores()

function obtenerMayores(){
  return usuarios.filter(usuario => usuario.edad >= 18)
}

console.log(obtenerMayores());
//crearUsuario(nombre, edad)

function crearUsuario(nombre, edad){

  
  const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
  const nuevoUsuario = { id: nuevoId, nombre, edad };
  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

console.log(crearUsuario("Lucas", 22));
console.log(obtenerUsuarios());
 