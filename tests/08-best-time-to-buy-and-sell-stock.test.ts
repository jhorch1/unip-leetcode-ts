import { describe, expect, test } from 'vitest';
import maxProfit from '../src/08-best-time-to-buy-and-sell-stock';

describe('08 - Best Time to Buy and Sell Stock', () => {
  test('Example 1: [7,1,5,3,6,4] should return 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('Example 2: [7,6,4,3,1] should return 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('Single day price list', () => {
    expect(maxProfit([5])).toBe(0);
  });
});
