const fs = require('fs');

console.log('Leyendo archivo...');

fs.readFile('./01-basic-concepts.js', 'utf-8', function (err, text) {
  console.log('Archivo leido...');
  console.log(text);
});

console.log('Archivo en proceso...');

// Versión utilizando promesas

function readFilePromise(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf-8', function (err, text) {
      if (err) {
        reject(); // No se pudo leer el archivo
      } else {
        resolve(text); // Lo leimos con éxito :)
      }
    }); 
  });
}

readFilePromise('./01-basic-concepts.js')
  .then(function (text) {
    console.log(text);
  });