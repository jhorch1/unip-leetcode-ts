import { describe, expect, test } from 'vitest';
import climbStairs from '../src/07-climbing-stairs';

describe('07 - Climbing Stairs', () => {
  test('Example 1: n = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  test('Example 2: n = 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  test('n = 5 should return 8', () => {
    expect(climbStairs(5)).toBe(8);
  });
});
