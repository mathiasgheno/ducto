/**
 * @nosideeffects
 * @type{import('./turnPropertiesIntoNumber.types').TurnPropertiesIntoNumber}
 */
export const turnPropertiesIntoNumbers = (object) => {
  const newObject = { ...object };
  Object.keys(newObject).forEach((key) => {
    if(typeof newObject[key] === 'string' && !isNaN(newObject[key])) {
      newObject[key] = Number(newObject[key]);
    }
  });
  return newObject;
}
