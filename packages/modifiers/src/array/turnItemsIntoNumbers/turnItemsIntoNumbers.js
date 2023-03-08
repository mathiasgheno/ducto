/**
 * @nosideeffects
 * @type {import('./turnItemsIntoNumbers.types').TurnItemsIntoNumbers}
 */
export const turnItemsIntoNumbers = (array) => {
  if(!Array.isArray(array)) {
    throw new Error('Argument is not an array');
  }

  const copy = [...array];
  return copy.map((item) => {
    if(Array.isArray(item)) {
      const copySubArray = [...item];
      return turnItemsIntoNumbers(copySubArray);
    }
    const possibleNumber = Number(item);
    return Number.isNaN(possibleNumber) ? item : possibleNumber;
  });
};
