/**
 * @nosideeffects
 * @type {import('./isPascalCase.types').IsPascalCase}
 */
export const isPascalCase = value => {
  if (typeof value !== 'string') {
    throw new Error(`The value ${value} is not a string`);
  }
  const itDoes = value.match(/^[A-Z](\w+)[a-z]$/g);
  const doesHaveSpecialChar = value.match(/[^a-zA-Z0-9]/g);
  if (!itDoes || doesHaveSpecialChar) {
    throw new Error(`The value ${value} is not pascal case`);
  }
  return value;
}
