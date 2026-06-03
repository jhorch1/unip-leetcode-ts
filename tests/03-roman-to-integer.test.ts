import romanToInt from '../src/03-roman-to-integer';

describe('03 - Roman to Integer', () => {
  test('Example 1: "III" should return 3', () => {
    expect(romanToInt("III")).toBe(3);
  });

  test('Example 2: "LVIII" should return 58', () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test('Example 3: "MCMXCIV" should return 1994', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  test('Single character: "V" should return 5', () => {
    expect(romanToInt("V")).toBe(5);
  });

  test('Subtraction case: "IV" should return 4', () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test('Subtraction case: "IX" should return 9', () => {
    expect(romanToInt("IX")).toBe(9);
  });

  test('Complex: "MCMXL" should return 1940', () => {
    expect(romanToInt("MCMXL")).toBe(1940);
  });
});
