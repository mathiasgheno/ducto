/**
 * @param props
 * @returns {function(*): *}
 * @nosideeffects
 * @description Returns a function that takes an object and returns a new object with only the properties specified in the props array.
 */
export const pickProperties = (...props) => (obj) => {
  return props.reduce((acc, prop) => {
    acc[prop] = obj[prop];
    return acc;
  }, {});
}
