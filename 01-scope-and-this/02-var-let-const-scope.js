/**
 * "var" has a function-scope
 */
function isAdult(age) {
  if (age >= 18) {
    var result = "is Adult";
  } else {
    var result = "is not Adult";
  }

  return result;
}

/**
 * "let" and "const" has a block-scope
 */
 function isAdultV2(age) {
  let result;
  
  if (age >= 18) {
    result = "is Adult";
  } else {
    result = "is not Adult";
  }

  return result;
}

console.log(isAdultV2(18));