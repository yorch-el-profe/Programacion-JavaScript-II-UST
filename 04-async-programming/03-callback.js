/**
 * Un callback es una función que se va a ejecutar
 * en el futuro despúes de determinada acción.
 */

function sayHi(name, callback = function(){}) {
  const time = Math.round(Math.random() * 500);
  setTimeout(function () {
    console.log(`Hi ${name} (${time/1000}seg)`);
    callback();
  }, time);
}

sayHi('Joaquin', function () {
  sayHi('Alberto', function () {
    sayHi('Karen', function () {
      sayHi('Oscar', function () {
        sayHi('Gabriel', function () {
          sayHi('Fabian', function () {
            sayHi('Leonardo', function () {
              sayHi('Maria José', function () {
                sayHi('Natalia');
              });
            });
          });
        });
      });
    });
  });
});

/**
 * Callback Hell es la anidación exagerada de callbacks para mantener una secuencia en las llamadas de las funciones asíncronas.
 */