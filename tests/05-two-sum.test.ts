import { describe, expect, test } from 'vitest';
import twoSum from '../src/05-two-sum';

describe('05 - Two Sum', () => {
  test('Example 1: [2,7,11,15], target 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('Example 2: [3,2,4], target 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('Negative numbers and duplicates', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
});
