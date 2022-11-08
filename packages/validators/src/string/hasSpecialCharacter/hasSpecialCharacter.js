/**
 * @type {import('./hasSpecialCharacter.types').HasSpecialCharacter}
 */
export const hasSpecialCharacter = (value) => {
  const itDoes = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
  if(!itDoes) {
    throw new Error(`The value ${value} does not have a special character`);
  }
  return value;
}
