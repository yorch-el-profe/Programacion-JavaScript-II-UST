const { challenge } = require('./challenge');

describe('Final Challenge', () => {
  test('Balanced sequence returns 0', () => {
    expect(challenge("()")).toBe(0);
    expect(challenge("()()()()()()()")).toBe(0);
    expect(challenge("(())")).toBe(0);
    expect(challenge("(((((())))))")).toBe(0);
    expect(challenge("(())((()()))")).toBe(0);
  });

  test('Missing ) in sequence', () => {
    expect(challenge("(()(")).toBe(2);
    expect(challenge("()()(((((")).toBe(5);
  });

  test('Missing ( in sequence', () => {
    expect(challenge('))(')).toBe(3);
    expect(challenge('(())))(')).toBe(3);
    expect(challenge('(()))(')).toBe(2);
    expect(challenge(')()()(')).toBe(2);
  });
});