import divide from '../src/04-divide-two-integers';

describe('04 - Divide Two Integers', () => {
  test('Example 1: dividend = 10, divisor = 3 should return 3', () => {
    expect(divide(10, 3)).toBe(3);
  });

  test('Example 2: dividend = 7, divisor = -3 should return -2', () => {
    expect(divide(7, -3)).toBe(-2);
  });

  test('Negative dividend: dividend = -2147483648, divisor = -1 should return 2147483647', () => {
    expect(divide(-2147483648, -1)).toBe(2147483647);
  });

  test('Same numbers: dividend = 10, divisor = 10 should return 1', () => {
    expect(divide(10, 10)).toBe(1);
  });

  test('Larger divisor: dividend = 1, divisor = 1 should return 1', () => {
    expect(divide(1, 1)).toBe(1);
  });

  test('Negative result: dividend = -10, divisor = 3 should return -3', () => {
    expect(divide(-10, 3)).toBe(-3);
  });

  test('Large numbers: dividend = 2147483647, divisor = 1 should return 2147483647', () => {
    expect(divide(2147483647, 1)).toBe(2147483647);
  });
});
