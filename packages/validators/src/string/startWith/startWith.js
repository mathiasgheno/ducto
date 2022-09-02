/**
 * @description Checks if the string starts with the given target string
 * @param {string} startValue
 * @returns {function(*): *}
 */
export const startWith = (startValue) => (value) => {
  if(typeof value !== 'string') {
    throw new Error(`The value ${value} is not a string`);
  }
  const itDoes = value.match(new RegExp(`^${startValue}`));
  if(!itDoes) {
    throw new Error(`The value ${value} does not start with ${startValue}`);
  }
  return value;
}
