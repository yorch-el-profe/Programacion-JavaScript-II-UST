exports.challenge = function challenge(sequence) {
  return sequence
    .split('')
    .reduce((stack, parenthesis) => 
      parenthesis === "(" ? [...stack, "("] :
        stack[stack.length-1] === "(" ? stack.slice(0, -1) :
          [...stack, ")"] , [])
    .length;
}