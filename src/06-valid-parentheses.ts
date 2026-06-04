function isValid(s: string): boolean {
  const brackets = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  const stack: string[] = [];

  for (const char of s) {
    if (brackets.has(char)) {
      if (stack.pop() !== brackets.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

export default isValid;
