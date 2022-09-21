function sayHi(name) {
  const time = Math.round(Math.random() * 1000);
  setTimeout(function () {
    console.log(`Hi ${name} (${time/1000}seg)`);
  }, time);
}

sayHi('Joaquin');
sayHi('Alberto');
sayHi('Gabriel');
sayHi('Leonardo');
sayHi('Maria José');
sayHi('Natalia');