/**
 * @nosideeffects
 * @type {import('./isUpperCase.types').IsUpperCase}
 */
export const isUpperCase = (value) => {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
  const numbers = /\d/g;
  const regex = /^[A-Z]+$/;
  const justLetters = value.replace(specialChars, '').replace(numbers, '');
  if(!regex.test(justLetters)) {
    throw new Error(`Value is not upper case`);
  }
  return value;
}
