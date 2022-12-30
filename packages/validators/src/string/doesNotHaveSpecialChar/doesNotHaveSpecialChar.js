/**
 * @nosideeffects
 * @type {import('./doesNotHaveSpecialChar.types').DoesNotHaveSpecialChar}
 */
export const doesNotHaveSpecialChar = (value) => {
  const regex = /[^a-zA-Z0-9]/g;
  if(regex.test(value)) {
    throw new Error('Values does have special characters');
  }
  return value;
}
