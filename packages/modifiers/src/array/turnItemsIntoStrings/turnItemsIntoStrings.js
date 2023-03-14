
/**
 * @nosideeffects
 * @type {import('./turnItemsIntoStrings.types').TurnItemsIntoStrings}
 */
export const turnItemsIntoStrings = (array) => {
  if(!Array.isArray(array)) {
    throw new Error('Argument is not an array');
  }

  const copy = [...array];
  return copy.map((item) => {
    if(Array.isArray(item)) {
      const copySubArray = [...item];
      return turnItemsIntoStrings(copySubArray);
    }
    return String(item);
  });
}
