/**
 * @param prop
 * @returns {function(*): *}
 * @description Returns a function that takes an object and returns a new object with only the property *not* specified in the prop string.
 */
export const omitProterty = (prop) => (obj) => {
  const copy = {...obj};
  delete copy[prop];
  return copy;
}
