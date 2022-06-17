/**
 * @param props
 * @returns {function(*): *}
 * @description Returns a function that takes an object and returns a new object with only the properties *not* specified in the props array.
 * @nosideeffects
 */
export const omitProperties = (...props) => (obj) => {
  return props.reduce((acc, prop) => {
    delete acc[prop];
    return acc;
  }, {...obj});
}

