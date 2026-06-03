function divide(dividend: number, divisor: number): number {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX;
  }

  const sign = (dividend < 0) !== (divisor < 0) ? -1 : 1;

  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let quotient = 0;

  while (absDividend >= absDivisor) {
    let currentDivisor = absDivisor;
    let currentQuotient = 1;

    while (currentDivisor + currentDivisor <= absDividend) {
      currentDivisor += currentDivisor;
      currentQuotient += currentQuotient;
    }

    absDividend -= currentDivisor;
    quotient += currentQuotient;
  }

  return sign === 1 ? quotient : -quotient;
}

export default divide;
