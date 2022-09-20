function sum(a = 0, b = 0) {
  return a + b;
}

//console.log(sum(10));
//console.log(sum());

function map(array = [], f = function(x) { return x; }) {
  let newArray = [];
  for (let entry of array) {
    newArray.push(f(entry));
  }
  return newArray;
}

const newArray = map([1,2,3], function (entry) {
  return entry * 3;
});

console.log(newArray);

const misteryArray = map([1,2,3]);

console.log(misteryArray); // ?