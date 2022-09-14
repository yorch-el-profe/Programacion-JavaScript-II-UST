/**
 * Destructuring: La forma de obtener propiedades y almacenarlas en variables
 * de un objeto o arreglo.
 */

const dog = {
  name: 'Dinky',
  breed: 'Electrico',
  age: 8,
  bark: function () {
    console.log('Woof!');
  }
}

// La forma vieja (ES5) es crear manualmente variables por cada una
// de las propiedad de los objetos.
const dogName = dog.name;
const dogBreed = dog.breed;

// La forma nueva
// Pattern Matching
const {name, breed, ...rest} = dog;

console.log(name); // Dinky
console.log(breed); // Electrico
console.log(rest); // { age, bark }


// Con arreglos funciona exactamente
const arr = [1,2,3,4,5];
const [first, second, ...everything_else] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(everything_else); // [3,4,5]

// Creando una copia de todo el arreglo
//const [...x] = arr;
const x = [...arr];

console.log(x);

// El destructuring también se puede aplicar a los párametros

// Versión vieja
function sayHi(person, info) {
  console.log('Hi, my name is ' + person.name + ' and I\'m ' + person.age + ' years old');
  console.log(info.address);
}

// Versión nueva
function sayHiV2({ name, age }, { address }) {
  console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old');
  console.log(address);
}

const myPerson = {
  name: 'Gabriel',
  age: 10,
  address: null
}

const myInfo = {
  name: null,
  age: null,
  address: 'Calzada Buenavista'
}

// sayHiV2(myInfo, myPerson); ❌
sayHiV2(myPerson, myInfo);