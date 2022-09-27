// ES Modules
//import { sum } from './calculator'

// CommonJS
const { sum } = require('./calculator');

// Sirve para agrupar pruebas
describe('Testing sum function', () => {
  test('0 + 0 = 0', () => {
    // Esperaría que sum(0,0) sea igual a 0
    expect(sum(0,0)).toBe(0);
  });
});

describe('Testing subs function', () => {

});