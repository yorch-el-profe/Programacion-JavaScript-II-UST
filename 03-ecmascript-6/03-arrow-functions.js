// ECMAScript 5
// Function declaration
function sum(a, b) {
  return a + b;
}

// Function expression
const sum_expression = function (a, b) {
  return a + b;
}

// ECMAScript 6 (function expression)
const sum_af = (a, b) => {
  return a + b;
}

const sum_shorter = (a, b) => a + b;

// ECMAScript 5
const newArray = [1,2,3].map(function (entry) {
  return entry * 2;
});

// ECMAScript 6
const newArray_af = [1,2,3].map((entry) => entry * 2);

// ECMAScript 5
const newArray2 = [1,2,3].map(function (entry) {
  console.log(entry);
  return entry * 2;
});

// ECMAScript 6
const newArray_af2 = [1,2,3].map((entry) => {
  console.log(entry);
  return entry * 2;
});