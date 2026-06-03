function reverse(x: number): number {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  let reversed = 0;
  let num = Math.abs(x);

  while (num !== 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);

    if (reversed > Math.floor((INT_MAX - digit) / 10)) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return x < 0 ? -reversed : reversed;
}

export default reverse;
