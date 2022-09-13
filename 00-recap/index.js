console.log('Hello World'); // System.out.println()

// Funciones
function suma(a, b) {
  //return a + b;
}

console.log(suma(1,1));

// Tipos de datos
// Number: 1, 20.5, 23129812398, 12398712938.38728273
// String: "Hello World", 'Hello World'
// Boolean: true, false
// Symbol
// Array: [], [10, 20, 30]
//              0   1   2
// Object: 
/*
  {
    name: 'Jacobo',
    lastName: 'Perez',
    age: 18,
    sayHi: function () {
      console.log('Hi');
    }
  }
*/
// null
// undefined

// Variables
var x = 0;
var y = "Esto es una cadena de texto";
x = 20;

let miVariable = true;
miVariable = false;

const miConstante = [];

// let miVariable = 0; ❌
//var x = -10000; // <---

miVariable = null;
// miConstante = undefined; ❌

// NO USAR VAR

// Estructuras de Decisión

if (x > 0) {
  console.log('X es mayor que 0');
} else if (x < 0) {
  console.log('X es negativo');
} else {
  console.log('X es cero');
}

if (1 === "1") {
  console.log('Ambos 1 son iguales');
} else {
  console.log('No, 1 no es igual a "1"');
}

if (1 !== "1") {
  console.log('1 es diferente de "1"');
} else {
  console.log("Ambos son iguales");
}


let mes = "ojhsajkhdasjhk";

switch (mes) {

  case "Enero":
    console.log('Mes 01');
    break;

  case "Febrero":
    console.log('Mes 02');
    break;

  default:
    console.log('No se reconoce el mes');
}

// Estructuras de Control

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while(j < 10) {
  console.log(j);
  j++;
}

var x = 50;
