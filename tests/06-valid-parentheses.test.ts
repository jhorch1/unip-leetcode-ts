import { describe, expect, test } from 'vitest';
import isValid from '../src/06-valid-parentheses';

describe('06 - Valid Parentheses', () => {
  test('Example 1: ()', () => {
    expect(isValid('()')).toBe(true);
  });

  test('Example 2: ()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('Example 3: (]', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('Mismatched closing bracket', () => {
    expect(isValid('([)]')).toBe(false);
  });
});
