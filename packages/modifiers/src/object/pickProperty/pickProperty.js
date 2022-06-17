/**
 * @param prop {string}
 * @returns {function(*): *}
 * @nosideeffects
 * @description Returns a function that takes an object and returns a new object with only the property specified in the prop string.
 */
export const pickProperty = (prop) => (obj) => obj[prop];
