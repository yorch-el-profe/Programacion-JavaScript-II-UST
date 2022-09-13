/**
 * Crear una función que evalue números de 0 a 100
 * con las siguientes condiciones:
 * 
 * Si el número es un múltiplo de 3, imprimir en pantalla Fizz
 * Si el número es un múltiplo de 5, imprimir en pantalla Buzz
 * Si el número es un múltiplo de 3 y 5, imprimir en pantalla FizzBuzz
 * 
 * 0
 * 1
 * 2
 * Fizz (3)
 * 4
 * Buzz (5)
 * Fizz (6)
 * 7
 * 8
 * Fizz (9)
 * Buzz (10)
 * 11
 * Fizz (12)
 * 13
 * 14
 * FizzBuzz (15)
 */

function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    let result = "";

    if (i%3 === 0 && i !== 0) {
      result = result + "Fizz";
    }

    if (i%5 === 0 && i !== 0) {
      result += "Buzz";
    }

    if (result === "") {
      result = i;
    }

    console.log(result);
  }
}

fizzbuzz();