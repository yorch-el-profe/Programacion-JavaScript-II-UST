// Adds 4 to a number
let adding = function(y) {
  return y + 4;
}

// Multiplies a number by 8
let multiplying = function(y) {
  return y * 8;
}

// Divides a number by 2
let dividing = function(y) {
  return y / 2;
}
/// Transform code to pipeline form
let dvalue = 10;
let evaluate = adding(multiplying(dividing(dvalue)));