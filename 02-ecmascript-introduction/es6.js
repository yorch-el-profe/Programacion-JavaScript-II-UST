// Destructuring
const person = {
  name: 'Whatever',
  age: 28,
  lastName: 'Lol',
  address: 'hjasdjkhasdkjhdsakjhdsakjhsda',
  id: 20,
}

const numbers = [40,30,50,10];

// ECMAScript 5
//const name = person.name;
//const lastName = person.lastName;
//const age = person.age;
//const index0 = numbers[0];
//const index1 = numbers[1];

// ECMAScript 6
const { name, lastName, age } = person;
const [index0, index1] = numbers;

// Data Structures
// Map, WeakMap
const table = new Map();

table.set("8237492834787234", "Juliana Medina");
table.set("0984560986540892", "Luis Garcia");

function key() {}

table.set(key, []);

//console.log(table.get(key));

table.set("0984560986540892", {});

//console.log(table.get("0984560986540892"));

table.set("14/09/2022", new Date());


// Set, WeakSet
// In mathematics a set is a collection of elements with no duplicates and no order
// Note: Sets are case sensitive
const set = new Set([1,1,1,2,2,2,3,3,3]);
set.add(5);
set.add(9);
set.add("Hello World");
set.add(true);
set.add("HEllo WOrld");

// Spread Operator (...)

// Problem: Make a copy of person object
// Here we are copying the REFERENCE
const person2 = { ...person };
person2.name = 'Francisco';
person2.lastName = 'Sanchez';
person2.age = 40;
person2.email = 'francisco@gmail.com';

console.log(person, person2);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

const mergedArray = [...arr3, ...arr2, ...arr1];

console.log(mergedArray);


// Problem: I want to pass indeterminated amount of parameters to a function
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

/**
 * x || y ->     if (x) { return x } else { return y };
 */

const sum_parameters = [1,2,3,4,5,6,7];
sum(...sum_parameters); // = sum(1,2,3,5,6,7);

const unique_values = [...set];