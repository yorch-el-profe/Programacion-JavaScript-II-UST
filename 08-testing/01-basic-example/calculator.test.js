// ES Modules
//import { sum } from './calculator'

// CommonJS
const { sum } = require('./calculator');

// Sirve para agrupar pruebas
describe('Testing sum function', () => {
  test('0 + 0 = 0', () => {
    // Esperaría que sum(0,0) sea igual a 0
    // toBe son valores exactos
    expect(sum(0,0)).toBe(0);
  });

  test('n + 0 = n', () => {
    const random = Math.ceil(Math.random() * 1000000);
    expect(sum(random, 0)).toBe(random)
  });

  test('0 + m = m', () => {
    const random = Math.ceil(Math.random() * 1000000);
    expect(sum(0, random)).toBe(random);
  });

  test('negative numbers', () => {
    const random1 = -1 * Math.ceil(Math.random() * 1000000);
    const random2 = -1 * Math.ceil(Math.random() * 1000000);
    expect(sum(random1, random2)).toBeLessThan(0);
  });

  test('strings', () => {
    expect(sum("0", "1")).toBeNaN();
  })

  test('any other type', () => {
    expect(sum(true, {})).toBeNaN();
    expect(sum([], null)).toBeNaN();
    expect(sum()).toBeNaN();
  });
});