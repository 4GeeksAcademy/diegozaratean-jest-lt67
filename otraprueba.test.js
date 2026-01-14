const sum = require('./sum');

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds 7 + -5 to equal 2', () => {
  expect(sum(7, -5)).toBe(2);
});