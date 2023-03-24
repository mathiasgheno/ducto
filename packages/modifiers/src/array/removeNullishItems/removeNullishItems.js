/**
 * @nosideeffects
 * @type {import('./RemoveNullishItems.types').RemoveNullishItems}
 */
export const removeNullishItems = (array) => {
  return array.map((item) => {
    if(Array.isArray(item)) {
      return removeNullishItems(item);
    }
    if(item !== null
      && item !== undefined
      && item !== ''
      && item !== false
      && item !== 0
      && !isNaN(item)
      && item !== Infinity
    ) {
      return item;
    }
    return undefined;
  }).filter((item) => !!item);
};

const array = [1, 2, 3, 'a'];
const result = removeNullishItems(array);
console.log(result);
