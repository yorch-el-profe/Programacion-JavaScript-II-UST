/**
 * Scope is when I can a use variable inside a function or the code itself
 */
const name = 'Pepito'; // Global variable or Global Scope

function printVariable() { // Global function
  console.log(name);
}

printVariable();


/**
 * Every function has its own scope
 * sometimes called local scope
 */
function sum(a, b) {
  var result;
  
  function calculateSum(a,b) {
    result = a + b;
  }

  calculateSum(a, b);

  return result;
}