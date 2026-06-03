import reverse from '../src/02-reverse-integer';

describe('02 - Reverse Integer', () => {
  test('Example 1: x = 123 should return 321', () => {
    expect(reverse(123)).toBe(321);
  });

  test('Example 2: x = -123 should return -321', () => {
    expect(reverse(-123)).toBe(-321);
  });

  test('Example 3: x = 120 should return 21', () => {
    expect(reverse(120)).toBe(21);
  });

  test('Overflow case: x = 1534236469 should return 0', () => {
    expect(reverse(1534236469)).toBe(0);
  });

  test('Single digit', () => {
    expect(reverse(0)).toBe(0);
  });

  test('Negative with trailing zeros', () => {
    expect(reverse(-100)).toBe(-1);
  });
});
