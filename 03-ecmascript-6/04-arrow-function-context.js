/**
 * Las funciones flecha heredan el contexto de la función padre
 */

const person = {
  name: 'Jeffer',
  lastName: 'Miller',
  sayHi: function () {
    console.log('Hi I\'m', this.name);
  }
}

person.sayHi();

// ECMAScript 5
const slowPerson = {
  name: 'Mauricio',
  lastName: 'Perez',
  sayHi: function () {
    const { name } = this;
    setTimeout(function () {
      console.log('Hi I\'m', name);
    }, 2000);
  }
}

slowPerson.sayHi();

// ECMAScript 6
const slowPerson2 = {
  name: 'Julian',
  lastName: 'Ortega',
  sayHi: function () {
    setTimeout(() => console.log('Hi I\'m', this.name), 3000);
  }
}

slowPerson2.sayHi();