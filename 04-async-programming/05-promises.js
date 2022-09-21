/**
 * Las promesas ayudan a encapsular la ejecución de código asíncrono y controlar
 * la continuidad del código
 */

function sayHi(name) {
  const time = Math.round(Math.random() * 500);

  // resolve: Caso de éxito
  // reject: Caso de falla
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hi ${name} (${time/1000}seg)`);
      resolve(); // La promesa termino bien :)
    }, time);
  });
}

// then() es la continuación DESPUÉS de resolver la promesa
sayHi('Jorge')
  .then(function () {
    return sayHi('Gabriel');
  })
  .then(function () {
    return sayHi('Joaquin');
  })
  .then(function () {
    return sayHi('Alberto');
  })
  .then(function () {
    return sayHi('Karen');
  })
  .then(function () {
    sayHi('Oscar');
  });

// Versión con async/await
async function sayHiExecution() {
  console.log('Comenzando saludos....');

  await sayHi('Jorge');
  await sayHi('Gabriel');
  await sayHi('Joaquin');
  await sayHi('Alberto');
  await sayHi('Karen');
  await sayHi('Oscar');

  console.log(':)');
}

sayHiExecution();