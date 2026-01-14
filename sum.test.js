const sum = require('./sum');

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adds 7 + 5 to equal 12', () => {
  expect(sum(7, 5)).toBe(12);
});


test('adds 0 + 3 to equal 3', () => {
  expect(sum(0, 3)).toBe(3);
});


test('adds 6 + 8 to equal 14', () => {
  expect(sum(6, 8)).toBe(14);
});