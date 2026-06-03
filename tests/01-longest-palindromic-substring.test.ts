import longestPalindrome from '../src/01-longest-palindromic-substring';

describe('01 - Longest Palindromic Substring', () => {
  test('Example 1: "babad" should return a valid palindrome', () => {
    const result = longestPalindrome("babad");
    expect(['bab', 'aba']).toContain(result);
  });

  test('Example 2: "cbbd" should return "bb"', () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });

  test('Single character', () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  test('No palindrome of length > 1', () => {
    const result = longestPalindrome("ac");
    expect(result.length).toBe(1);
  });
});
