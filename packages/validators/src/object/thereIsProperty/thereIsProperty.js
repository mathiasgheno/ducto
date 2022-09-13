/**
 * @param {string} prop
 * @returns {function(*): *}
 */
export const thereIsProperty = (prop) => (object) => {
  if(object[prop] === undefined) {
    throw new Error(`Property ${prop} is undefined`);
  }
  return object;
}
