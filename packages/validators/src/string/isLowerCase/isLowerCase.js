/**
 * @nosideeffects
 * @type {import('./isLowerCase.types').IsLowerCase}
 */
export const isLowerCase = (value) => {
  const possibleString = value;
  const isNot = typeof possibleString !== 'string';
  if(isNot) {
    throw new Error(`Value is not an string`);
  }
  const itDoes = possibleString.match(/^[^A-Z]+$/g);
  if(!itDoes) {
    throw new Error(`Value is not lower case`);
  }
  return value;
}
