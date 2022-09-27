// ES Modules
// export function sum(a,b) { ... }

// CommonJS
exports.sum = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return NaN;
  }
  
  return a + b;
}