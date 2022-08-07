export const objectDoesNotHaveNullishProperty = (object) => () => {
  if(object === null || object === undefined) {
    throw new Error('Object is nullish');
  }
  const hasNullishProperty = Object.values(object).some(value => value === null || value === undefined)

  if(hasNullishProperty) {
    throw new Error('Object has nullish property');
  }
  return object;
}
